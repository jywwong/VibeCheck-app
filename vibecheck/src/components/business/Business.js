    import React from 'react';
    import business from './business.scss';

    const Business = ({business}) => {
    return (
    <div className='business-card'>
    <div className="imagecontainer">
    <img src={business.imageURL} alt=""/>
    </div>
    <container className="business-details-container">
    <container className="business-details-container-left">
     <p className='name'>{business.name}</p>
     <div className='location'>
     <p className='address'>{business.address}</p>
    <p className='city'>{business.city}</p>
    <p className='category'>{business.category.toUpperCase()}</p>
    </div>
    </container>
    <container className="business-details-container-right">
    <p className='rating' key='rating' value=''>{business.rating} stars</p>
    <p className='reviewCount' key='reviewcount' value=''>{business.reviewCount} reviews</p>
    </container>
    </container>
     </div>
    );
}

export default Business;