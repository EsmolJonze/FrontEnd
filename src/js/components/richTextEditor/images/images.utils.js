import { Transforms } from 'slate';
import { isUrl } from '../../../misc/utils';

const IMAGE_EXTENSIONS = {
  jpg: 'jpg',
  png: 'png',
  gif: 'gif',
  jpeg: 'jpeg',
};

export const insertImage = (editor, url, point = undefined, href = undefined) => {
  const text = { text: '' };
  const image = { type: href ? 'image-link' : 'image', url, children: [text], href };

  // Empty paragraph after the image to delete it
  const paragraph = { type: 'paragraph', children: [text] };
  point
    ? Transforms.insertNodes(editor, [image, paragraph], { at: point, select: true })
    : Transforms.insertNodes(editor, [image, paragraph], { select: true });
};

export const isImageUrl = url => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  let ext;
  try {
    ext = new URL(url).pathname.split('.').pop();
  } catch {
    ext = url instanceof String ? url.split('.').pop() : '';
  }
  return IMAGE_EXTENSIONS.hasOwnProperty(ext);
};
