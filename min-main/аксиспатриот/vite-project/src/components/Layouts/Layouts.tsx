import React from 'react';
import './Layouts.css';
import layout1 from '../../assets/images/layout-1.webp';
import layout2 from '../../assets/images/layout-2.webp';
import layout3 from '../../assets/images/layout-3.webp';

const Layouts: React.FC = () => {
  const layouts = [
    { img: layout1, title: '1-комнатная', area: '45-55 м²', price: 'от 8.5 млн ₽' },
    { img: layout2, title: '2-комнатная', area: '70-85 м²', price: 'от 14 млн ₽' },
    { img: layout3, title: '3-комнатная', area: '95-120 м²', price: 'от 20 млн ₽' },
  ];

  return (
    <section id="layouts" className="layouts">
      <div className="container">
        <h2 className="section-title">ПЛАНИРОВКИ</h2>
        <div className="layouts__grid">
          {layouts.map((layout, index) => (
            <div key={index} className="layouts__card">
              <img src={layout.img} alt={layout.title} className="layouts__img" />
              <h3 className="layouts__title">{layout.title}</h3>
              <p className="layouts__area">{layout.area}</p>
              <p className="layouts__price">{layout.price}</p>
              <button className="layouts__btn">Подробнее</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layouts;