import { useEffect } from 'react';

export const useScript = url => {
  useEffect(() => {
    if (url) {
      const script = document.createElement('script');

      script.src = url;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
    return () => {};
  }, [url]);
};
