import { useRef, useEffect } from 'react';

const titlePostfix = 'Bloobirds';

/**
 * https://github.com/rehooks/document-title/blob/master/index.js
 * @param title The new title to apply
 * @param retainOnUnmount if true then the given title will stay after component unmount
 */
export const useDocumentTitle = (title, retainOnUnmount = false) => {
  const defaultTitle = useRef(document.title);
  useEffect(() => {
    document.title = [title, titlePostfix].join(' | ');

    return () => {
      if (!retainOnUnmount) {
        document.title = defaultTitle.current;
      }
    };
  }, [title]);
};
