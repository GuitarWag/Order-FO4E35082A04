import { useSelector } from 'react-redux';
import { specialitiesSelector } from '..';
import { Speciality } from '../../../../api';

const useSpecialities = (): Speciality[] => useSelector(specialitiesSelector);

export default useSpecialities;
