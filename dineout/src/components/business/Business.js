    import React from 'react';
    import business from './business.scss';

    const Business = ({business}) => {
    return (
    <div className='business-card'>
    <div className="imagecontainer">
    <img
    src={business.imageURL}
    alt=""
     />
     </div>
     <p className='name'>Name: {business.name}</p>
     <p className='address'>Address: {business.address}</p>
    <p className='city'>City: {business.city}</p>
    <p className='category'>Category: {business.category}</p>
    <p className='rating' key='rating' value=''>Rating: {business.rating}</p>
    <p className='reviewCount' key='reviewcount' value=''>Number of reviews: {business.reviewCount}</p>
     </div>
    );
}

export default Business;