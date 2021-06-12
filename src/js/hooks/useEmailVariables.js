import { atom, useRecoilState, useResetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useEntity } from './entities/useEntity';
import { useActiveCompany } from './useActiveCompany';
import { useActiveUser } from './useActiveUser';
import { useActiveLeads } from './useActiveLeads';

const emailVariablesAtom = atom({
  key: 'emailVariables',
  default: {
    variables: {},
    created: false,
  },
});

const emailVariablesValuesAtom = atom({
  key: 'emailVariablesValues',
  default: {
    values: {},
    loaded: {},
  },
});

const getVariableValue = (activeLead, activeUser, company, variable) => {
  const type = variable.type;
  const id = variable.id;
  let value;

  switch (type) {
    case 'company':
      value = company?.find(fieldItem => fieldItem.name === id)?.text;
      break;
    case 'lead':
      value = activeLead?.find(fieldItem => fieldItem.name === id)?.text;
      break;
    case 'user':
      value = activeUser.name;
      break;
    default:
      break;
  }
  return { ...variable, value };
};

const parseEmailVariables = (bobjectFields, bobjectTypes) => {
  let variablesParsed = {};

  bobjectFields.forEach(field => {
    const logicRole = field.logicRole;
    const types = bobjectTypes?.all().find(x => x.id === field.bobjectType);
    const type = types.name.toLowerCase();

    const obj = {
      [type]: [
        ...(variablesParsed[type] || []),
        {
          id: field.id,
          type,
          name: field.name,
          logicRole,
        },
      ],
    };

    variablesParsed = {
      ...variablesParsed,
      ...obj,
      SDR: [
        {
          id: 'user',
          name: 'Name',
          type: 'user',
          logicRole: 'USER__NAME',
        },
      ],
    };
  });

  return variablesParsed;
};

const addValueOfVariables = (activeLead, activeUser, company, state) => {
  let data = {};
  let hasValuesLoaded = {};
  const stateFiltered = { ...state };
  const stateVariables = stateFiltered.variables;

  Object.keys(stateVariables).forEach(keyVariablesGroup => {
    const variables = stateVariables[keyVariablesGroup]?.map(variable =>
      getVariableValue(activeLead?.fields, activeUser, company?.fields, variable),
    );

    data = {
      ...data,
      [keyVariablesGroup]: variables,
    };

    hasValuesLoaded = {
      ...hasValuesLoaded,
      [keyVariablesGroup]: true,
    };
  });

  return { variables: data, hasValuesLoaded };
};

export const useEmailVariables = () => {
  const [emailVariables, setEmailVariables] = useRecoilState(emailVariablesAtom);
  const [emailVariablesValues, setEmailVariablesValues] = useRecoilState(emailVariablesValuesAtom);
  const resetEmailVariablesValues = useResetRecoilState(emailVariablesValuesAtom);
  const templatesBobjectFields = useEntity('bobjectFields');
  const bobjectTypes = useEntity('bobjectTypes');
  const { company } = useActiveCompany();
  const { selectedLead } = useActiveLeads();
  const { activeUser } = useActiveUser();

  useEffect(() => {
    if (templatesBobjectFields && bobjectTypes) {
      if (!emailVariables.created) {
        setEmailVariables({
          ...emailVariables,
          variables: parseEmailVariables(
            templatesBobjectFields?.all().filter(entity => entity.templateVariable),
            bobjectTypes,
          ),
          created: true,
        });
      } else {
        setEmailVariables({ ...emailVariables, created: true });
      }
    }
  }, [emailVariables.created, templatesBobjectFields, bobjectTypes]);

  useEffect(() => {
    if (activeUser) {
      const { variables, hasValuesLoaded } = addValueOfVariables(
        selectedLead,
        activeUser,
        company,
        emailVariables,
      );

      setEmailVariablesValues({
        ...emailVariablesValues,
        values: variables,
        loaded: hasValuesLoaded,
      });
    }
  }, [activeUser, selectedLead, company]);

  return {
    emailVariables,
    emailVariablesValues,
    resetEmailVariablesValues,
  };
};
