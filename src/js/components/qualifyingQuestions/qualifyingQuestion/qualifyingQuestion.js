import React, { useEffect, useState } from 'react';
import styles from './qualifyingQuestion.module.css';
import {
  Icon,
  Input,
  Item,
  Select,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';

const QualifyingQuestion = ({ type, disabled, value, question, answers, onChange }) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <div>
      <header className={styles.header}>
        <Icon className={styles.headerIcon} name="chatSupport" color="softPeanut" />
        <Text size="m" color="peanut">
          {question}
        </Text>
      </header>
      {type === 'TEXT' ? (
        <Input
          disabled={disabled}
          width="100%"
          value={internalValue}
          onChange={v => setInternalValue(v)}
          onBlur={() => onChange(internalValue)}
        />
      ) : (
        <Select
          disabled={disabled}
          width="100%"
          value={internalValue}
          onChange={newValue => {
            onChange(newValue);
            setInternalValue(newValue);
          }}
        >
          <Item value="">
            <em>None</em>
          </Item>
          {answers.map(answer => (
            <Item key={answer.id} hidden={!answer.enabled} value={answer.id}>
              {answer.value}
            </Item>
          ))}
        </Select>
      )}
    </div>
  );
};

export default QualifyingQuestion;
