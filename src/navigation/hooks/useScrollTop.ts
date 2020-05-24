import { useCallback } from 'react';

const useScrollTop = (): (() => void) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  return useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
};

export default useScrollTop;
