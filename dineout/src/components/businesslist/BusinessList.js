import Business from '../business/Business';
import React from 'react';
import styles from './businesslist.scss'

const BusinessList = ({businesses}) => {
  return(
    <div className="businessList">
      {businesses.map ((business) => {
        return <Business className='list' business={business} key={business.name}/>;
      })}
      </div>
      );
    };

export default BusinessList;