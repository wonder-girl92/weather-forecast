import { useEffect, useState } from 'react';
import { API_KEY } from '../settings';

export const useForecast = (city) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (city !== null) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no&lang=ru`
      )
        .then((res) => res.json())
        .then(setData);
    }
  }, [city]);
  return data;
};
