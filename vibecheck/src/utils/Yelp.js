const apiKey = 'aTIErdHUumZn6k59HdQ7CrLZ0W3dStnCaj-XnFcKqjr0TA5oUaVdxGskzd2dnBubfAAnHzKlUSm7KhECEhKDqp6jdIDe_ILQdwyVTCwB2I98WJ7a0lV4f5aBWO01YHYx';

const Yelp = {
    async search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => ({
                        id: business.id,
                        imageURL: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }));
                }
            });
    },
};


export default Yelp;