import api, { Speciality } from '../../api';

const get = (): Speciality[] => api.specialities();

export default get;
