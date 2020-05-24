import axios from 'axios';
import { head, get } from 'lodash';
import db from './database.json';

export interface Speciality {
  name: string;
  image: string;
  id: string;
  slug: string;
}

export interface City {
  name: string;
  id: string;
}
export const specialities: () => Speciality[] = () => db.specialities;
export const topCities: () => City[] = () => db.topCities;

export const getCityByZipcode = async (zipcode: string): Promise<string> => {
  try {
    const response = await axios.get(`https://m.usps.com/m/QuickZipAction?mode=2&tZip=${zipcode}&jsonInd=Y`);
    return get(head(response.data.addresses), 'city');
  } catch (e) {
    throw new Error(e);
  }
};
export default {
  specialities,
  getCityByZipcode,
  topCities,
};
