import api from '../../api';

const get = async (zipcode: string): Promise<string> => {
  const [city] = await Promise.all([api.getCityByZipcode(zipcode)]);
  return city;
};

export default get;
