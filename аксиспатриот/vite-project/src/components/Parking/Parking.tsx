import React from 'react';
import './Parking.css';
import parkingImg from '../../assets/images/parking.webp';

const Parking: React.FC = () => {
  return (
    <section id="parking" className="parking">
      <div className="container">
        <h2 className="section-title">ПАРКИНГ</h2>
        <div className="parking__content">
          <img src={parkingImg} alt="Паркинг" className="parking__img" />
          <div className="parking__text">
            <h3>Подземный паркинг</h3>
            <ul>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parking;