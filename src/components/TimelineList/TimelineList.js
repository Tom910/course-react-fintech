import React from 'react';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineDelimiter from '../TimelineDelimiter/TimelineDelimiter';
import './TimelineList.css';

export default ({ operations }) => (
  <div className='TimelineList'>
    <TimelineDelimiter />
    {operations.length === 0 && <div className='TimelineList__empty'>Еще нет событий</div>}
    {operations.map((item, index) => (
      <TimelineItem key={index} title={item.title} price={item.amount} category={item.category} account={item.account} />
    ))}
  </div>
);
