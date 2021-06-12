import { Button, Input, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useActiveUser, useRouter } from '../../../../hooks';
import styles from './qualifyingQuestionScoresPage.module.css';

const QQ_SCORE_LOWER_BOUND = [
  'QQ_SCORE_LOWER_BOUND_AAA',
  'QQ_SCORE_LOWER_BOUND_A',
  'QQ_SCORE_LOWER_BOUND_B',
  'QQ_SCORE_LOWER_BOUND_C',
];

const QualifyingQuestionScores = () => {
  const { restApi } = useBloobirdsApiStateContext();
  const { activeAccount } = useActiveUser();
  const { handleSubmit, control, setValue } = useForm();
  const { history } = useRouter();
  const [ratings, setRatings] = useState([]);

  const handleCancel = () => history.goBack();

  const onSubmit = values => {
    Promise.all(
      Object.entries(values)
        .filter(([id]) => !id.startsWith('UPPER'))
        .map(([id, score]) =>
          restApi.service('accountSettings').partialUpdate(id, { value: score.toString() }),
        ),
    )
      .then(history.goBack)
      .catch(console.error);
  };

  useEffect(() => {
    restApi
      .service('accountSettings')
      .search({
        query: {
          account: activeAccount.id,
          names: QQ_SCORE_LOWER_BOUND,
        },
      })
      .then(response => {
        const newRatings = response._embedded.accountSettings
          .filter(({ name }) => name.includes('QQ_SCORE'))
          .map(({ value, id, name }) => ({
            id,
            score: parseInt(value, 10),
            role: name.match(/[A-Z]+$/)[0],
          }))
          .sort((a, b) => {
            if (a.role === 'AAA') return -1;
            if (b.role === 'AAA') return 1;

            return a.role > b.role ? 1 : -1;
          });

        newRatings.forEach(({ id, score }, i) => {
          setValue(id, score, true);
          setValue(`UPPER_${id}`, newRatings[i + 1]?.score || 'Unlimited', true);
        });

        setRatings(newRatings);
      })
      .catch(console.error);
  }, []);

  return (
    <section className={styles._section}>
      <header className={styles._header}>
        <Text color="peanut" weight="medium" size="xl">
          QQ Score rating settings
        </Text>
      </header>
      <form className={styles._content}>
        <ul className={styles._rating_list}>
          <div className={styles._titles}>
            <span className={styles._title}>
              <Text size="l" color="peanut">
                From
              </Text>
            </span>
            <span className={styles._title}>
              <Text size="l" color="peanut">
                To
              </Text>
            </span>
          </div>
          {ratings.map(({ role, id, score }, i) => (
            <li className={styles._rating} key={role}>
              <Text align="right" size="m" color="peanut">
                {role}
              </Text>
              <div className={styles._inputs}>
                <Controller
                  name={id}
                  as={<Input width={132} type="number" />}
                  control={control}
                  defaultValue={score}
                  onChange={([value]) => {
                    if (ratings[i + 1]) setValue(`UPPER_${ratings[i + 1].id}`, value, true);
                    return value;
                  }}
                />
                <Controller
                  name={`UPPER_${id}`}
                  as={<Input width={132} disabled />}
                  control={control}
                  defaultValue={ratings[i - 1]?.score || 'Unlimited'}
                />
              </div>
            </li>
          ))}
        </ul>
      </form>
      <div className={styles._actions}>
        <Button onClick={handleCancel} variant="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>Save Settings</Button>
      </div>
    </section>
  );
};

export default QualifyingQuestionScores;
