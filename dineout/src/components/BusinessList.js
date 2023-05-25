import Business from './Business';
import React from 'react';

const BusinessList = ({businesses}) => {
  return(
    <div>
      {businesses.map ((business) => {
        return <Business business={business} key={business.name}/>;
      })}
      </div>
      );
    };

export default BusinessList;