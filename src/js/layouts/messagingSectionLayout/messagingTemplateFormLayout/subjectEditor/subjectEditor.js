import React, { useRef } from 'react';
import styles from './subjectEditor.module.css';
import { Controller, useFormContext } from 'react-hook-form';
import RichTextEditor from '../../../../components/richTextEditor';
import AddVariableButton from '../../../../components/richTextEditor/variables/addVariableButton';

const SubjectEditor = () => {
  const ref = useRef();
  const { control, errors } = useFormContext();
  return (
    <div className={styles.editor}>
      <Controller
        name="subject"
        as={
          <RichTextEditor
            ref={ref}
            hoveringToolbar={false}
            singleLine
            styled
            placeholder="Subject"
            error={errors.subject?.message}
          >
            <div>
              <AddVariableButton editorRef={ref} />
            </div>
          </RichTextEditor>
        }
        control={control}
      />
    </div>
  );
};

export default SubjectEditor;
