import React from 'react';
import styles from '../qualifyingQuestionTemplateForm.module.css';
import { Controller } from 'react-hook-form';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';

const AnswerRow = ({ control, type, index, answer, register, left, right }) => {
  const answerType = `${type}Answers[${index}]`;

  return (
    <div className={styles._answerRow__container}>
      <input
        name={`${answerType}.order`}
        defaultValue={answer.order}
        hidden
        ref={register({ type: 'numeral' })}
      />
      <input name={`${answerType}.enabled`} defaultValue={answer.enabled} hidden ref={register()} />
      <input name={`${answerType}.id`} defaultValue={answer.id} hidden ref={register()} />
      {left}
      <Controller
        name={`${answerType}.value`}
        as={Input}
        control={control}
        rules={{ required: 'Each answer must have a value' }}
        placeholder="Answer"
        width="360px"
        defaultValue={answer.value}
      />
      <Controller
        name={`${answerType}.score`}
        as={Input}
        type="number"
        control={control}
        placeholder="Score"
        width="132px"
        defaultValue={answer.score}
      />
      {right}
    </div>
  );
};

export default AnswerRow;
