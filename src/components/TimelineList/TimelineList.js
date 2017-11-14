import React from 'react';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineDelimiter from '../TimelineDelimiter/TimelineDelimiter';
import './TimelineList.css';

export default ({ operations }) => {
  const keysOperation = Object.keys(operations);

  return (
    <div className='TimelineList'>
    <TimelineDelimiter/>
    {keysOperation.length === 0 && <div className='TimelineList__empty'>Еще нет событий</div>}
    {keysOperation.map((key, index) => {
      const item = operations[key];

      return <TimelineItem key={key} title={item.title} price={item.amount} category={item.category} account={item.account}/>;
    })}
  </div>
  );
};
