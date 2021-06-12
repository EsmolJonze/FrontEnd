import XLSX from 'xlsx';

export default () => {
  const createWorkbook = bobjectTypeName => {
    const wb = XLSX.utils.book_new();

    const save = (name = `BB - Data Model ${bobjectTypeName}`) =>
      XLSX.writeFile(wb, `${name}.xlsx`);

    const AppendJsonToSheet = (xlsxArgs, sheetName = 'sheet') => {
      const ws = XLSX.utils.json_to_sheet(xlsxArgs.data, xlsxArgs.options);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
      return {
        AppendJsonToSheet,
        save,
      };
    };

    const AppendArrayBufferToSheet = data => {
      const workbook = XLSX.read(data, { type: 'array' });
      XLSX.utils.book_append_sheet(
        wb,
        workbook.Sheets[workbook.SheetNames[0]],
        workbook.SheetNames[0],
      );
      return {
        AppendArrayBufferToSheet,
        save,
      };
    };

    return {
      AppendJsonToSheet,
      AppendArrayBufferToSheet,
    };
  };

  const readFileToJsonAsync = file =>
    new Promise(res => {
      const reader = new FileReader();
      reader.onload = e => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const columnIndices = {};
        const fileData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
          raw: false,
        });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const columnCount = XLSX.utils.decode_range(sheet['!ref']).e.c + 1;
        for (let i = 0; i < columnCount; i += 1) {
          const value = sheet[`${XLSX.utils.encode_col(i)}1`]?.v;
          columnIndices[value] = i;
        }
        res({
          data: fileData,
          name: file.name,
          columnIndices,
        });
      };
      reader.readAsArrayBuffer(file);
    });

  return {
    createWorkbook,
    readFileToJsonAsync,
  };
};
