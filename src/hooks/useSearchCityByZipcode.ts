import { useCallback, useState } from 'react';
import { getCityByZipcode } from '../api';

interface Return {
  city: string | null;
  fetchCity: (zipcode: string) => void;
  clear: () => void;
  error: Error | null;
  loading: boolean;
}
const useSearchCityByZipcode = (): Return => {
  const [city, setCity] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const fetchCity = useCallback(
    async (zipcode: string) => {
      setLoading(true);
      try {
        const response = await getCityByZipcode(zipcode);
        setCity(response);
        setLoading(false);
      } catch (e) {
        setCity(null);
        setError(e);
        setLoading(false);
      }
    },
    [setLoading, setError, setCity],
  );
  const clear = useCallback(() => setCity(null), [setCity]);
  return {
    city,
    fetchCity,
    error,
    loading,
    clear,
  };
};

export default useSearchCityByZipcode;
