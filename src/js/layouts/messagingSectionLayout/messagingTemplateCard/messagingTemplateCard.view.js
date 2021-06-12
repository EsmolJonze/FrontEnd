import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  // Switch,
  Button,
  Icon,
  IconButton,
  Label,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import classnames from 'clsx';
import { TEMPLATE_TYPES, TEMPLATE_TYPES_ICONS } from '../../../utils/templates.utils';
import { switchDateFormat } from '../../../misc/utils';
import Metric from './metric';
import {
  deserializeHtmlTemplate,
  serialize,
  SERIALIZE_MODE,
} from '../../../components/richTextEditor/serializer/serializer';
import styles from './messagingTemplateCard.module.css';

const MessagingTemplateCard = ({
  enabled = true,
  lastUpdated,
  onClone,
  onCopy,
  onEdit,
  templateBody,
  templateName,
  templateSubject,
  templateType,
  templateStatistics,
  type,
  actions,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [isCardOverflown, setIsCardOverflown] = useState(false);

  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      const { scrollHeight } = cardRef.current;

      if (scrollHeight > 70) {
        setIsCardOverflown(true);
      }
    }
  }, [cardRef]);

  return (
    <div className={styles._container}>
      <div className={styles._icon__container}>
        <Icon name={TEMPLATE_TYPES_ICONS[templateType]} color="softPeanut" />
      </div>
      <div className={styles._metadata__container}>
        <Text
          className={classnames({ [styles.disabled]: !enabled })}
          color={enabled ? 'peanut' : 'softPeanut'}
          weight="medium"
          size="m"
        >
          {templateName || templateBody}
          {!enabled && (
            <Label size="small" overrideStyle={{ marginLeft: 8 }}>
              Disabled
            </Label>
          )}
        </Text>
        {templateType === TEMPLATE_TYPES.QUALIFYING_QUESTION && (
          <Text size="xs" color="softPeanut">
            Last update {switchDateFormat(lastUpdated)}
          </Text>
        )}
        {templateType === TEMPLATE_TYPES.EMAIL &&
          templateStatistics &&
          Object.keys(templateStatistics).length !== 0 && (
            <div className={styles._statistics_container}>
              <Metric name="OPENED_RATE" value={templateStatistics.OPENED_RATE} />
              <Metric name="CLICKED_RATE" value={templateStatistics.CLICKED_RATE} />
              <Metric name="REPLIED_RATE" value={templateStatistics.REPLIED_RATE} />
            </div>
          )}
      </div>
      {templateType !== TEMPLATE_TYPES.QUALIFYING_QUESTION && (
        <div className={styles._body__container}>
          <div
            className={classnames(styles._body__box, {
              [styles._body__box_without_overflow]: showMore,
              [styles._body__box_with_overflow]: isCardOverflown ? !showMore : false,
            })}
            ref={cardRef}
          >
            <div
              className={styles._template_subject}
              dangerouslySetInnerHTML={{
                __html: serialize(
                  { children: deserializeHtmlTemplate(templateSubject) },
                  SERIALIZE_MODE.PLAIN_HTML,
                ),
              }}
            />
            <div
              className={styles._template_body}
              dangerouslySetInnerHTML={{
                __html: serialize(
                  { children: deserializeHtmlTemplate(templateBody) },
                  SERIALIZE_MODE.PLAIN_HTML,
                ),
              }}
            />
          </div>
          <div className={styles._body__footer}>
            {isCardOverflown && (
              <Button
                iconRight={showMore ? 'chevronUp' : 'chevronDown'}
                variant="clear"
                uppercase={false}
                onClick={() => setShowMore(!showMore)}
              >
                Show {!showMore ? 'more' : 'less'}
              </Button>
            )}
            <Text size="xs" color="softPeanut" weight="regular">
              Last update {switchDateFormat(lastUpdated)}
            </Text>
          </div>
        </div>
      )}
      {/* type === 'TEMPLATE_MANAGEMENT' && (
        <div className={styles._templateActions__container}>
          <div className={styles._switchText__container}>
            <Text size="s" inline color="bloobirds">
              Enabled
            </Text>
          </div>
          <Switch checked={isEnabled} onChange={toggleIsEnabled} />
        </div>
      ) */}
      <div className={styles._actions__container}>
        <Tooltip title="Clone" position="top">
          <IconButton name="clone" onClick={onClone} />
        </Tooltip>
        {type === 'CONTACT_VIEW' && (
          <Tooltip title="Copy" position="top">
            <IconButton name="copy" onClick={onCopy} />
          </Tooltip>
        )}
        <Tooltip title="Edit" position="top">
          <IconButton name="edit" onClick={onEdit} />
        </Tooltip>
        {type === 'CONTACT_VIEW' && actions}
      </div>
    </div>
  );
};

export default MessagingTemplateCard;
