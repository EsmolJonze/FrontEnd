import { useState, useEffect } from 'react';

const minSizes = Object.freeze({
  DESKTOP_SMALL: 1024,
  DESKTOP_MEDIUM: 1280,
  DESKTOP_BIG: 1440,
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useMediaQuery() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [isSmallDesktop, setIsSmallDesktop] = useState(
    getWindowDimensions().width < minSizes.DESKTOP_MEDIUM,
  );
  const [isDesktop, setIsDesktop] = useState(getWindowDimensions().width < minSizes.DESKTOP_BIG);

  useEffect(() => {
    function handleResize() {
      const winDim = getWindowDimensions();
      setWindowDimensions(winDim);
      setIsSmallDesktop(winDim.width < minSizes.DESKTOP_MEDIUM);
      setIsDesktop(winDim.width < minSizes.DESKTOP_BIG);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowDimensions, isSmallDesktop, isDesktop };
}
