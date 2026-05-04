import React from 'react';
import './Investments.css';

const Investments: React.FC = () => {
  return (
    <section id="investments" className="investments">
      <div className="container">
        <h2 className="section-title">ИНВЕСТИЦИИ</h2>
        <div className="investments__content">
          <div className="investments__text">
            <h3>Почему это выгодная инвестиция?</h3>
            <ul>
              <li>📈 Рост стоимости недвижимости на 15-20% в год</li>
              <li>🏆 Премиальная локация в центре города</li>
              <li>💰 Высокий спрос на аренду</li>
              <li>🔒 Надежный застройщик</li>
            </ul>
          </div>
          <div className="investments__stats">
            <div className="stat">
              <span className="stat__number">15-20%</span>
              <span className="stat__label">Годовой рост</span>
            </div>
            <div className="stat">
              <span className="stat__number">8.5%</span>
              <span className="stat__label">Доходность аренды</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investments;