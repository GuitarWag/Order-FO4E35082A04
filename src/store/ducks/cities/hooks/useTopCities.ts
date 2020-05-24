import { useSelector } from 'react-redux';
import { topTopCitiesSelector } from '..';
import { City } from '../../../../api';

const useTopCities = (): City[] => useSelector(topTopCitiesSelector);

export default useTopCities;
