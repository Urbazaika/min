import React from 'react';
import './Hero.css';
import heroMain from '../../assets/images/heroMain.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="hero" 
      style={{ backgroundImage: `url(${heroMain})` }}
    >
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-main">АКСИС ПАТРИОТ</span>
          <span className="hero__title-sub">ДОМ ПЕРВОГО КЛАССА В ИСТОРИЧЕСКОМ ЦЕНТРЕ СТАВРОПОЛЯ</span>
        </h1>
        
        <p className="hero__description">
          Премиальный жилой комплекс в формате приватной резиденции.<br />
          Пространство, где статус становится образом жизни
        </p>

        {/* <div className="hero__buttons">
          <button 
            className="hero__btn hero__btn--primary" 
            onClick={() => scrollToSection('about')}
          >
            Узнать о проекте
          </button>
          
          <button 
            className="hero__btn hero__btn--secondary" 
            onClick={() => scrollToSection('layouts')}
          >
            Смотреть планировки
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;