    import React from 'react';

    const Business = ({business}) => {
    return (
    <div className='business-card'>
    <img
    src={business.imageURL}
    alt={business.imgAltName}
    width={business.width}
     />
     <p className='name'>{business.name}</p>
     <p className='address'>{business.address}</p>
    <p className='city'>{business.city}</p>
    <p className='category'>{business.category}</p>
    <p className='rating' key='rating' value=''>{business.rating}</p>
    <p className='reviewCount' key='reviewcount' value=''>{business.reviewCount}</p>
     </div>
    );
}

export default Business;