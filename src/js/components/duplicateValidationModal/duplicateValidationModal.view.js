import React from 'react';
import styles from './duplicateValidationModal.module.css';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import {
  useDuplicateValidationModal,
  useRouter,
  useBobjectFormVisibility,
  useBobjectForm,
} from '../../hooks';
import { bobjectUrl } from '../../app/_constants/routes';
import { capitalize } from 'lodash/string';
import Card from './card';
import { getFieldByLogicRole } from '../../utils/bobjects.utils';

const DuplicateValidationModal = () => {
  const { history } = useRouter();
  const { bobject, duplicates, closeDuplicateValidationModal } = useDuplicateValidationModal();
  const { openWithCurrentState } = useBobjectFormVisibility();
  const { defaultValues } = useBobjectForm();

  const bobjectType = bobject.id.typeName;
  const bobjectName = getFieldByLogicRole(bobject, `${bobjectType.toUpperCase()}__NAME`).text;
  const subtitle = duplicates[0].duplicates[0].contents[duplicates[0].fieldId];
  const existingBobjectUrl = bobjectUrl(bobject);
  const fieldNames = duplicates
    .map(({ fieldName }) => fieldName.toLowerCase())
    .join(', ')
    .replace(/, ([^,]*)$/, ' and $1');
  const message = `${capitalize(bobjectType)} ${fieldNames} already exists${
    fieldNames.length === 1 ? 's' : ''
  }`;
  const duplicateName = Object.entries(defaultValues).find(
    ([logicRole]) => logicRole === `${bobjectType.toUpperCase()}__NAME`,
  )[1];

  return (
    <Modal
      open
      width={952}
      title="Check a possible duplicate"
      onClose={closeDuplicateValidationModal}
    >
      <ModalContent>
        <div className={styles._body}>
          <Text size="l" align="center" weight="bold">
            Which {bobjectType.toLowerCase()} would you like to keep?
          </Text>
          <main className={styles._card_list}>
            <Card
              title={`New ${bobjectType}`}
              name={duplicateName || bobjectName}
              subtitle={subtitle}
            />
            <Card
              title={`Existing ${bobjectType}`}
              name={bobjectName}
              subtitle={subtitle}
              link={existingBobjectUrl}
              message={message}
            />
          </main>
          <div className={styles._body_footer}>
            <Text size="m" color="peanut" weight="bold">
              Keeping the existing {bobjectType.toLowerCase()} will disregard the data of the new{' '}
              {bobjectType.toLowerCase()}
            </Text>
            <Text size="m" color="peanut">
              If this is not a duplicate you can go back and edit the matching information.
            </Text>
          </div>
        </div>
      </ModalContent>
      <ModalFooter>
        <Button
          uppercase
          variant="secondary"
          onClick={() => {
            openWithCurrentState();
            closeDuplicateValidationModal();
          }}
        >
          Back and edit
        </Button>
        <Button
          uppercase
          variant="primary"
          dataTest="keepAndViewButton"
          onClick={() => {
            history.push(existingBobjectUrl);
            closeDuplicateValidationModal();
          }}
        >
          Keep & view existing ${bobjectType.toLowerCase()}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DuplicateValidationModal;
