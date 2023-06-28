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
     <p className='name'>{business.name}</p>
     <div className="business_details">
     <div className='location'>
     <p className='address'>{business.address}</p>
    <p className='city'>{business.city}</p>
    <p className='category'>{business.category.toUpperCase()}</p>
    </div>
    <div className='ratingsandreviews'>
    <p className='rating' key='rating' value=''>{business.rating} stars</p>
    <p className='reviewCount' key='reviewcount' value=''>{business.reviewCount} reviews</p>
    </div>
     </div>
     </div>
    );
}

export default Business;