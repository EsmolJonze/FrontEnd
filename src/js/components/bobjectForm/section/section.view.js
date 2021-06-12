import React from 'react';
import Field from './field';
import { ModalSection } from '@bloobirds-it/bloobirds-platform-component-library';
import { toCamelCase } from '../../../utils/strings.utils';
import styles from './section.module.css';

const Section = ({
  title,
  icon,
  bobjectType,
  fields,
  hideActivityType,
  isRequiredBeforeMeeting,
}) => {
  const hasWriteableFields = fields.some(field => !field.readOnly);
  if (!hasWriteableFields && !isRequiredBeforeMeeting) {
    return null;
  }

  const resultFields = isRequiredBeforeMeeting ? fields : fields.filter(field => !field.readOnly);
  if (resultFields.length === 0) {
    return null;
  }

  return (
    <div className={styles._grid}>
      <ModalSection title={title} icon={toCamelCase(icon)}>
        {resultFields.map(field => (
          <Field
            key={field.name}
            {...field}
            bobjectType={bobjectType}
            hideActivityType={hideActivityType}
          />
        ))}
      </ModalSection>
    </div>
  );
};

export default Section;
