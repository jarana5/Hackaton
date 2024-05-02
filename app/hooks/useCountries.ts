import citiesData from 'world-countries';

const formattedCountries = citiesData.map((city) => ({
  value: city.cca2,
  label: city.name.common,
  latlng: city.latlng,
  region: city.region,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;
