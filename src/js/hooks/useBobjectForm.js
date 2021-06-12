import { atom, useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { BobjectApi } from '../misc/api/bobject';
import useDuplicateValidationModal from './useDuplicateValidationModal';
import { useUserSettings } from '../components/userPermissions/hooks';
import { useAddToCalendar } from './useAddToCalendar';
import { useToasts } from '@bloobirds-it/bloobirds-platform-component-library';
import { usePicklistValues } from './usePicklistValues';
import { useBobjectDetailsVisibility } from './useBobjectDetails';
import useBobjectFieldGroups from './useBobjectFieldGroups';
import { companyIdUrl } from '../app/_constants/routes';
import { useRouter } from './useRouter';
import mixpanel from 'mixpanel-browser';

const visibilityAtom = atom({
  key: 'bobjectFormVisibility',
  default: false,
});

const bobjectInfoAtom = atom({
  key: 'bobjectFormInfo',
  default: {
    bobject: null,
    bobjectType: null,
    mode: 'EDIT',
    additionalValues: {},
    defaultValues: {},
    onSuccess: () => {},
  },
});

export const useBobjectForm = () => {
  const { history } = useRouter();
  const settings = useUserSettings();
  const { createToast } = useToasts();
  const { setAddToCalendarState, openAddToCalendarModal } = useAddToCalendar();
  const { openDuplicateValidationModal } = useDuplicateValidationModal();
  const activityTypes = usePicklistValues({ picklistLogicRole: 'ACTIVITY__TYPE' });

  const [bobjectInfo, setBobjectInfo] = useRecoilState(bobjectInfoAtom);
  const resetBobjectInfo = useResetRecoilState(bobjectInfoAtom);
  const {
    defaultValues,
    additionalValues,
    bobjectType,
    mode,
    bobject,
    onSuccess,
    leadToAssign,
  } = bobjectInfo;
  const setIsOpen = useSetRecoilState(visibilityAtom);
  const { loading, sections } = useBobjectFieldGroups({ bobjectType });

  const openCalendarModal = (values, saveBobjectType) => {
    if (saveBobjectType === 'Task') {
      setAddToCalendarState({
        dateTime: values.TASK__SCHEDULED_DATETIME || new Date(),
        title: values.TASK__TITLE,
        leadId: values.TASK__LEAD,
        companyId: values.TASK__COMPANY,
        bobjectType: saveBobjectType,
        successCallback: onSuccess,
      });
    }

    if (saveBobjectType === 'Activity') {
      setAddToCalendarState({
        dateTime: values.ACTIVITY__TIME || new Date(),
        title: values.ACTIVITY__MEETING_TITLE,
        leadId: values.ACTIVITY__LEAD,
        companyId: values.ACTIVITY__COMPANY,
        accountExecutiveId: values.ACTIVITY__ACCOUNT_EXECUTIVE,
        bobjectType: saveBobjectType,
        successCallback: onSuccess,
      });
    }

    openAddToCalendarModal();
  };

  const shouldOpenCalendar = (values, saveMode, saveBobjectType) => {
    if (saveMode !== 'CREATE') {
      return false;
    }

    if (saveBobjectType === 'Task') {
      return true;
    }

    const isActivity = saveBobjectType === 'Activity';
    const meetingTypeId = activityTypes.find(
      ({ logicRole }) => logicRole === 'ACTIVITY__TYPE__MEETING',
    ).id;
    const isMeetingActivity = isActivity && values.ACTIVITY__TYPE === meetingTypeId;
    const isCalendarPopupEnabled = settings?.settings.openCalendarPopupAfterMeeting;

    return isMeetingActivity && isCalendarPopupEnabled;
  };

  const basicSaveBobject = async (
    values,
    saveAdditionalValues,
    saveMode,
    saveBobjectType,
    saveOptions = {},
  ) => {
    const params = { duplicateValidation: true };
    const rawContents = { ...values, ...saveAdditionalValues };
    const contents = Object.keys(rawContents)
      .filter(field => !field.includes('_FROM_COMPANY'))
      .reduce((obj, key) => {
        obj[key] = rawContents[key];
        return obj;
      }, {});
    const data = { contents, params };
    const bobjectApi = BobjectApi.request().bobjectType(saveBobjectType);
    let response;
    if (saveMode === 'EDIT') {
      response = await bobjectApi.partialSet({ bobjectId: bobject?.id.objectId, data });
    } else if (saveMode === 'CREATE') {
      response = await bobjectApi.create(data);
    }

    if (saveOptions?.type === 'Meeting') {
      const companyFields = Object.keys(rawContents).filter(field =>
        field.includes('_FROM_COMPANY'),
      );
      if (companyFields.length > 0) {
        const companyContents = companyFields.reduce((obj, key) => {
          obj[key.replace('_FROM_COMPANY', '')] = rawContents[key];
          return obj;
        }, {});
        const companyData = { contents: companyContents, params };
        await BobjectApi.request()
          .Company()
          .partialSet({
            bobjectId: saveOptions?.company.data.id.objectId,
            data: companyData,
          });
      }
    }

    if (saveOptions?.closeAfter) {
      setIsOpen(false);
    }

    if (response?.errorType === 'BobjectFieldDuplicatedException') {
      setBobjectInfo({ ...bobjectInfo, defaultValues: values });
      mixpanel.track(`${bobjectType}_${mode}_duplicate_detected`, {
        duplicates_found: response.duplicates,
        ...contents,
      });
      await openDuplicateValidationModal({
        duplicates: response.duplicates,
        bobjectType: saveBobjectType,
      });
      return;
    }

    mixpanel.track(`${bobjectType}_${mode}`, {
      ...contents,
    });

    if (saveOptions?.leadToAssign) {
      await BobjectApi.request()
        .Lead()
        .partialSet({
          bobjectId: saveOptions.leadToAssign,
          data: {
            LEAD__COMPANY: response?.value,
          },
        })
        .then(() => {
          createToast({ type: 'success', message: 'Lead added to new Qualified Company' });
          history.push(companyIdUrl(response?.value));
        });
      mixpanel.track(`${bobjectType}_${mode}_lead_added_to_qc`, {
        lead_id: saveOptions.leadToAssign,
        company_id: response?.value,
      });
    }

    if (shouldOpenCalendar(values, saveMode, saveBobjectType)) {
      openCalendarModal(values, saveBobjectType);
    } else if (onSuccess) {
      onSuccess({ bobjectData: response });
    }

    const message = `${saveBobjectType} ${saveMode === 'EDIT' ? 'updated' : 'created'}!`;
    createToast({ message, type: 'success' });

    resetBobjectInfo();
  };

  const saveBobject = async values => {
    await basicSaveBobject(values, additionalValues, mode, bobjectType, {
      leadToAssign,
      closeAfter: true,
    });
  };

  return {
    defaultValues,
    sections,
    bobject,
    bobjectType,
    saveBobject,
    basicSaveBobject,
    mode,
    loading,
    bobjectInfo,
    setBobjectInfo,
  };
};

export const useBobjectFormVisibility = () => {
  const { closeBobjectDetails } = useBobjectDetailsVisibility();
  const [isOpen, setIsOpen] = useRecoilState(visibilityAtom);
  const setBobjectInfo = useSetRecoilState(bobjectInfoAtom);
  const resetBobjectInfo = useResetRecoilState(bobjectInfoAtom);

  const openCreateModal = ({
    bobjectType,
    additionalValues = {},
    defaultValues = {},
    onSuccess = () => {},
    leadToAssign,
  }) => {
    closeBobjectDetails();
    setBobjectInfo({
      onSuccess,
      bobjectType,
      additionalValues,
      defaultValues,
      mode: 'CREATE',
      bobject: null,
      leadToAssign,
    });
    setIsOpen(true);
  };

  const openEditModal = ({ bobject, onSuccess = () => {} }) => {
    const defaultValues = bobject.fields.reduce((acc, { type, name, logicRole, value }) => {
      if (type === 'DATETIME' || type === 'DATE') {
        acc[logicRole || name] = value ? new Date(value) : null;
      } else {
        acc[logicRole || name] = value;
      }
      return acc;
    }, {});
    closeBobjectDetails();
    setBobjectInfo({
      onSuccess,
      defaultValues,
      bobject,
      bobjectType: bobject.id.typeName,
      mode: 'EDIT',
    });
    setIsOpen(true);
  };

  const openWithCurrentState = () => {
    setIsOpen(true);
  };

  const closeBobjectForm = () => {
    setIsOpen(false);
    resetBobjectInfo();
  };

  return {
    isOpen,
    openCreateModal,
    openEditModal,
    openWithCurrentState,
    closeBobjectForm,
  };
};
