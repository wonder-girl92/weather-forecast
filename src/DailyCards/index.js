import React, { useState } from 'react';
import { DailyCard } from '../DailyCard';

export const DailyCards = ({ daily }) => {
  const [orderBy, setOrderBy] = useState('by_date_asc');

  const handleOnChange = (event) => {
    setOrderBy(event.target.value);
  };

  const sortedCitiesList = daily.sort((a, b) => a.date_epoch - b.date_epoch);
  if (orderBy === 'by_date_desc') {
    sortedCitiesList.reverse();
  }

  return (
    <>
      <select className='Select' value={orderBy} onChange={handleOnChange}>
        <option value='by_date_asc'>By name asc</option>
        <option value='by_date_desc'>By name desc</option>
      </select>
      <div className='DailyCards'>
        {sortedCitiesList.map((dailyCard) => (
          <DailyCard dailyCard={dailyCard} key={dailyCard.date_epoch} />
        ))}
      </div>
    </>
  );
};
