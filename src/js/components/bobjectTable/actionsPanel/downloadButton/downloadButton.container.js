import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { dataToXlsxArgs, xlsxManager } from '../../../../misc/xlsxManager';
import { withWrappers } from '../../../../misc/utils';
import DownloadButtonView from './downloadButton.view';
import { getShownBobjectFields, addQueryParamsFromTypes } from '../../context/bobjectTable.utils';
import { BobjectApi } from '../../../../misc/api/bobject';
import { useEntity } from '../../../../hooks/entities/useEntity';
import { useBobjectTable } from '../../../../hooks';

const DownloadButtonContainer = () => {
  const { query, columns, bobjectType } = useBobjectTable();
  const bobjects = useRef([]);
  const bobjectTypeEntity = useEntity('bobjectTypes')?.findBy('name')(bobjectType);
  const entityBobjectFields = useEntity('bobjectFields');
  const bobjectTypes = useEntity('bobjectTypes');
  const fieldTypes = useEntity('fieldTypes');

  const resolvedFieldTypes = useMemo(() => fieldTypes, [fieldTypes, bobjectType]);

  const shownBobjectFields = getShownBobjectFields(columns, entityBobjectFields);

  const [isDisabled, setDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const onErrorRequestingBobjects = err => {
    console.info(err);
    setDisabled(false);
    setLoading(false);
  };

  useEffect(() => {
    setDisabled(!columns);
  }, [columns]);

  const process = useCallback((bobjectsToProcess, selectedColumnsShown, bobjectTypesS) => {
    const xlsxArgs = dataToXlsxArgs(bobjectsToProcess.current, selectedColumnsShown, bobjectTypesS);
    bobjectsToProcess.current = [];
    xlsxManager()
      .createWorkbook(bobjectType)
      .AppendJsonToSheet(xlsxArgs, 'sheet1')
      .save();
    setDisabled(false);
    setLoading(false);
  }, [bobjectTypes]);

  const retrieveBobjects = (selectedPage, selectedColumnsShown) => {
    if (bobjectTypeEntity && query && bobjectTypes && resolvedFieldTypes && entityBobjectFields) {
      const finalQuery = addQueryParamsFromTypes(
        query,
        bobjectTypeEntity,
        entityBobjectFields,
        bobjectTypes,
        resolvedFieldTypes,
      );
      BobjectApi.request()
        .bobjectType(bobjectTypeEntity.name)
        .search({
          query: finalQuery,
          formFields: true,
          page: selectedPage,
          pageSize: 1000,
          injectReferences: true,
        })
        .then(payload => {
          bobjects.current = [...bobjects.current, ...payload.contents];
          payload.totalMatching > (selectedPage + 1) * 1000
            ? retrieveBobjects(selectedPage + 1, selectedColumnsShown)
            : process(bobjects, selectedColumnsShown, bobjectTypes);
        })
        .catch(onErrorRequestingBobjects);
    }
  };

  const handleDownload = useCallback(() => {
    setDisabled(true);
    setLoading(true);
    retrieveBobjects(0, shownBobjectFields);
  }, [shownBobjectFields, query, resolvedFieldTypes]);

  return (
    <DownloadButtonView
      handleDownload={handleDownload}
      isLoading={isLoading}
      isDisabled={isDisabled}
    />
  );
};

export default withWrappers({ router: true })(DownloadButtonContainer);
