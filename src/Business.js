import React from 'react';
import './Business.css';

const Business = () => {
  const business = {
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Nama Restoran',
    address: '123 Jalan Palsu',
    city: 'Jakarta',
    state: 'DKI',
    zipCode: '10110',
    category: 'Cepat Saji',
    rating: 4.5,
    reviewCount: 90
  };

  return (
    <div className="Business">
      <div className="image-container">
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.category}</h3>
          <h3 className="rating">{`Rating: ${business.rating}`}</h3>
          <p>{`${business.reviewCount} Ulasan`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
