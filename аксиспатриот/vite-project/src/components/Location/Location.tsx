import React from 'react';
import './Location.css';
import locationMap from '../../assets/images/location-map.webp';

const Location: React.FC = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <h2 className="section-title">РАСПОЛОЖЕНИЕ</h2>
        <div className="location__content">
          <div className="location__text">
            <h3>Исторический центр Ставрополя</h3>
            <ul className="location__list">
            </ul>
          </div>
          <img src={locationMap} alt="Карта расположения" className="location__map" />
        </div>
      </div>
    </section>
  );
};

export default Location;