import { EMAIL_MODE } from '../../constants/email';
import { serialize, SERIALIZE_MODE } from '../richTextEditor/serializer/serializer';
import { convertHtmlToString } from '../../utils/email.utils';
import { useToasts } from '@bloobirds-it/bloobirds-platform-component-library';

export function submitNewEmailForm({
  mode,
  model,
  data,
  attachedFiles,
  webApi,
  setIsSubmitting,
  handleClose,
  setErrorSubmitting,
  templateId,
}) {
  const { createToast } = useToasts();
  const webRequest = {
    url: mode === EMAIL_MODE.SEND ? '/email/send' : '/email/reply',
    method: 'POST',
    body: {
      emailReplayTo: mode === EMAIL_MODE.REPLY ? data.emailFrom : '',
      replyToMessageId:
        mode === EMAIL_MODE.REPLY ? model.findByLogicRole('ACTIVITY__EMAIL_UID').text : null,
      emailCc: data.emailCc,
      emailTo: data.emailTo,
      emailFrom: data.emailFrom,
      subject: convertHtmlToString(
        serialize({ children: data.subject }, SERIALIZE_MODE.PLAIN_HTML),
        null,
        false,
      ),
      body: `<html>${serialize({ children: data.body }, SERIALIZE_MODE.PLAIN_HTML)}</html>`,
      fileIds: attachedFiles.map(file => file.id),
      templateId,
    },
  };

  webApi
    .request(webRequest)
    .then(response => {
      setIsSubmitting(false);
      if (response.code === 200) {
        handleClose();
        createToast({ type: 'success', message: 'Email has seen successfully sent' });
        return;
      }
      if (response.code >= 400) {
        handleClose();
        createToast({
          type: 'warning',
          message: 'Email had a short delay 😞 Please check if it was sent correctly',
        });
        return;
      }
      setErrorSubmitting(
        'Something went wrong while trying to send the email. Please check that all fields are filled correctly.',
      );
    })
    .catch(() =>
      setErrorSubmitting(
        'Something went wrong while trying to send the email. Please check that all fields are filled correctly.',
      ),
    );
}

export const removeAttachedFileFromNylas = (attachedFileId, webApi) => {
  const webRequest = {
    url: `/email/file?id=${attachedFileId}`,
    method: 'DELETE',
    body: {
      id: attachedFileId,
    },
  };

  webApi.request(webRequest).catch(console.error);
};
