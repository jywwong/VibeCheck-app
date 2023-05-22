const business = {
    imageURL: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    imgAltName: 'camden_pizzeria',
    width: '300px',
    name: 'Camden Pizzeria',
    address: '999 Road',
    city: 'London',
    category: 'Italian',
    rating: '5 stars',
    reviewCount: '35'};

    function Business () {
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