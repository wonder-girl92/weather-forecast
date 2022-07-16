import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Card } from '../Card';
import { DailyCards } from '../DailyCards';

import { useForecast } from '../hooks/useForecast';

import '../App.css';

export const SingleCity = () => {
  const params = useParams();
  const { city } = params;
  const data = useForecast(city);

  return (
    <div className='Main SingleCityWrap'>
      <Link to='/home' className='GoBack'>
        Go back
      </Link>
      <Card city={city} />
      {data && <DailyCards daily={data.forecast.forecastday} />}
    </div>
  );
};
