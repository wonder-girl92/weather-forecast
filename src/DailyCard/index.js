import React from 'react';

export const DailyCard = ({ dailyCard }) => {
  const { day, date_epoch } = dailyCard;
  const { condition, avgtemp_c } = day;
  const { text, icon } = condition;
  const currentDate = new Date(date_epoch * 1000);

  return (
    <div className='DailyCard'>
      <div> {currentDate.toString().split(' ')[0]} </div>
      <img className='Icon' alt='' src={icon} />
      <div> {avgtemp_c.toFixed()}° </div>
      <div> {text} </div>
    </div>
  );
};
