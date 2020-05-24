import { useSelector } from 'react-redux';
import { topSpecialitiesSelector } from '..';
import { Speciality } from '../../../../api';

const useSpecialities = (): Speciality[] => useSelector(topSpecialitiesSelector);

export default useSpecialities;
