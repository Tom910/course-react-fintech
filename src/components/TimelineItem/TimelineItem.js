import React from 'react';
import Money from '../Money/Money';

import './TimelineItem.css';

const TimelineItem = ({ title, price, category, account }) => (
  <div className='TimelineItem'>
    <div className='TimelineItem__operations'>
      <div className='TimelineItem__operations-account'>
        {account ? account.name : null}
      </div>
      <div className='TimelineItem__operations-title'>
        {title}
      </div>
    </div>

    <div className='TimelineItem__total'>
      <div className='TimelineItem__total-money'>
        <Money value={price} />
      </div>
      <div className='TimelineItem__total-category'>
        {category}
      </div>
    </div>
    <div>
    </div>
  </div>
);

export default TimelineItem;
