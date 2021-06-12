import { atom, useRecoilState } from 'recoil';

const importFormStepAtom = atom({
  key: 'importFormStep',
  default: 0,
});

const importFormValidationAtom = atom({
  key: 'importFormValidation',
  default: false,
});

const importFormImportAtom = atom({
  key: 'importFormImport',
  default: false,
});

const importFormCanBeImportedAtom = atom({
  key: 'importFormCanBeImported',
  default: false,
});

const importFormActionAtom = atom({
  key: 'importFormAction',
  default: 'CREATE',
});

const importExcelFileNameAtom = atom({
  key: 'importFormExcelFileName',
  default: null,
});

const importFormInfoAtom = atom({
  key: 'importFormInfo',
  default: { bobjectType: null, importName: '', excelFile: null },
});

export const useImportForm = () => {
  const [step, setStep] = useRecoilState(importFormStepAtom);
  const [action, setAction] = useRecoilState(importFormActionAtom);
  const [info, setInfo] = useRecoilState(importFormInfoAtom);
  const [startValidation, setStartValidation] = useRecoilState(importFormValidationAtom);
  const [startImport, setStartImport] = useRecoilState(importFormImportAtom);
  const [canBeImported, setCanBeImported] = useRecoilState(importFormCanBeImportedAtom);
  const [excelFileName, setExcelFileName] = useRecoilState(importExcelFileNameAtom);

  const nextStep = () => {
    setStep(step + 1 > 2 ? 2 : step + 1);
  };

  const prevStep = () => {
    setStep(step - 1 < 0 ? 0 : step - 1);
  };

  const setBobjectType = bobjectTypeName => {
    setInfo({
      ...info,
      bobjectType: bobjectTypeName,
    });
  };

  const setImportName = importName => {
    setInfo({
      ...info,
      importName,
    });
  };

  const setExcelFile = data => {
    setInfo({
      ...info,
      excelFile: data,
    });
  };

  const clearImportData = () => {
    setInfo({
      ...info,
      bobjectType: null,
      excelFile: null,
      importName: '',
    });

    setAction('CREATE');
    setStep(0);
    setStartImport(false);
    setStartValidation(false);
    setCanBeImported(false);
    setExcelFileName(null);
  };

  return {
    ...info,
    step,
    action,
    setAction,
    nextStep,
    prevStep,
    setBobjectType,
    setImportName,
    setExcelFile,
    clearImportData,
    startValidation,
    setStartValidation,
    startImport,
    setStartImport,
    canBeImported,
    setCanBeImported,
    excelFileName,
    setExcelFileName,
  };
};
