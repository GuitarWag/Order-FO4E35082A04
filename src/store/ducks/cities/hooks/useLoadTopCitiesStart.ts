import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { loadTopCitiesStart } from '..';

const useLoadTopCitiesStart = (): (() => void) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(loadTopCitiesStart());
  }, [dispatch]);
};

export default useLoadTopCitiesStart;
