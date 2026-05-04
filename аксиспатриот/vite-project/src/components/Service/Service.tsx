import React from 'react';
import './Service.css';

const Service: React.FC = () => {
  const services = [
    { icon: '', title: 'Консьерж-сервис', desc: 'Круглосуточная поддержка' },
    { icon: '️', title: 'Фитнес-центр', desc: 'Современный зал' },
    { icon: '', title: 'Ландшафтный дизайн', desc: 'Зеленые зоны' },
    { icon: '', title: 'Безопасность', desc: 'Видеонаблюдение 24/7' },
  ];

  return (
    <section id="service" className="service">
      <div className="container">
        <h2 className="section-title">СЕРВИС</h2>
        <div className="service__grid">
          {services.map((item, index) => (
            <div key={index} className="service__card">
              <div className="service__icon">{item.icon}</div>
              <h3 className="service__title">{item.title}</h3>
              <p className="service__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;