import React from 'react';
import TimelineItem from '../TimelineItem/TimelineItem';
import './TimelineList.css';

export default ({ items }) => (
  <div className='List'>
    {items.map((item, index) => <div key={index}>
      <TimelineItem title={item.title} price={item.price} />
    </div>)}
  </div>
);
