import React, { useRef } from 'react';
import styles from './contentEditor.module.css';
import { Controller, useFormContext } from 'react-hook-form';
import RichTextEditor from '../../../../components/richTextEditor';
import { TEMPLATE_TYPES } from '../../../../utils/templates.utils';
import AddVariableButton from '../../../../components/richTextEditor/variables/addVariableButton';
import { AttachImageButton } from '../../../../components/emailModal/attachImageButton/attachImageButton.view';

const ContentEditor = ({ templateType }) => {
  const ref = useRef();
  const { control } = useFormContext();
  return (
    <div className={styles.editor}>
      <Controller
        name="content"
        control={control}
        as={
          <RichTextEditor ref={ref}>
            {templateType === TEMPLATE_TYPES.EMAIL && (
              <div>
                <AddVariableButton editorRef={ref} />
                <AttachImageButton />
              </div>
            )}
          </RichTextEditor>
        }
      />
    </div>
  );
};

export default ContentEditor;
