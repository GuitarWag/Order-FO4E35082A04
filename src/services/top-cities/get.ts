import { City, topCities } from '../../api';

const get = async (): Promise<City[]> => {
  return topCities();
};

export default get;
