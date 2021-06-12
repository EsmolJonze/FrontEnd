import { ServiceApi } from '../misc/api/service';
import { bobjectModel } from '../misc/model/bobjectFieldsModel';
import { getValueFromLogicRole } from '../utils/bobjects.utils';
import { useActiveOpportunities } from './useActiveOpportunities';
import { useActiveLeads } from './useActiveLeads';
import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const loadingAtom = atom({
  key: 'bobjectFormLoading',
  default: true,
});

const sectionsAtom = atom({
  key: 'bobjectFormSections',
  default: [],
});

const cachedFieldGroups = {};

const fetchFieldGroups = async bobjectType => {
  if (bobjectType in cachedFieldGroups) {
    return [...cachedFieldGroups[bobjectType]];
  }

  const response = await ServiceApi.request({
    method: 'GET',
    url: `/service/view/field/groups/${bobjectType}`,
  });

  cachedFieldGroups[bobjectType] = response.sections;

  return response.sections;
};

const fetchRequiredMeetingFields = async () =>
  ServiceApi.request({
    method: 'GET',
    url: '/service/view/field/required/beforeMeeting',
  });

const useBobjectFieldGroups = ({ bobjectType, options = {} }) => {
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [sections, setSections] = useRecoilState(sectionsAtom);
  const { opportunities } = useActiveOpportunities();
  const { leads } = useActiveLeads();

  useEffect(() => {
    if (!bobjectType) return;

    const referencedLeads = leads?.map(lead => ({
      conditions: [],
      label: bobjectModel(lead).find('FULL_NAME').text,
      logicRole: null,
      parentFieldValueValue: null,
      value: lead.id.value,
    }));

    const referencedOpportunities = opportunities?.map(opportunity => ({
      conditions: [],
      label: getValueFromLogicRole(opportunity, 'OPPORTUNITY__NAME', true),
      logicRole: null,
      parentFieldValueValue: null,
      value: opportunity.id.value,
    }));

    if (!cachedFieldGroups[bobjectType]) {
      setLoading(true);
    }

    fetchFieldGroups(bobjectType).then(response => {
      const newSections = response.map(section => {
        const fields = section.fields.map(field => {
          const newField = { ...field };
          if (newField.type === 'Reference' && newField.referencedBobjectType === 'Lead') {
            newField.fieldValues = referencedLeads;
          } else if (
            newField.type === 'Reference' &&
            newField.referencedBobjectType === 'Opportunity'
          ) {
            newField.fieldValues = referencedOpportunities;
          }
          return newField;
        });
        return { ...section, fields };
      });
      if (bobjectType === 'Activity' && options.type === 'Meeting') {
        fetchRequiredMeetingFields().then(res => {
          setSections([...newSections, ...res]);
          setLoading(false);
        });
      } else {
        setSections(newSections);
      }
      setLoading(false);
    });
  }, [bobjectType, leads, opportunities]);

  return { loading, sections };
};

export default useBobjectFieldGroups;
