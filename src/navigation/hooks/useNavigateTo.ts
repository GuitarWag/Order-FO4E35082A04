import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import { replace } from 'lodash';
import useScrollTop from './useScrollTop';

const useNavigateTo = (): ((route: string, state?: Record<string, any>, slug?: string) => void) => {
  const history = useHistory();
  const scrollTop = useScrollTop();
  return useCallback(
    (route: string, state?: Record<string, any>, slug = '') => {
      const path = replace(route, ':slug', slug);
      history.push(path, state);
      scrollTop();
    },
    [history, scrollTop],
  );
};

export default useNavigateTo;
