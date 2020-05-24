import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { loadSpecialitiesStart } from '..';

const useLoadSpecialitiesStart = (): (() => void) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(loadSpecialitiesStart());
  }, [dispatch]);
};

export default useLoadSpecialitiesStart;
