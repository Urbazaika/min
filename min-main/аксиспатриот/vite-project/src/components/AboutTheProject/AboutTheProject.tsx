import React from 'react';
import './AboutTheProject.css';
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';
import about3 from '../../assets/images/about3.jpg';
import about4 from '../../assets/images/about4.jpg';
import about5 from '../../assets/images/about5.jpg';
import about6 from '../../assets/images/about6.jpg';

export const AboutTheProject: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        {/* 1. Левое высокое фото */}
        <img src={about1} alt="Фасад" className="about__img about__img--1" />
        
        {/* 2. Верхнее правое фото */}
        <img src={about2} alt="Терраса" className="about__img about__img--2" />
        
        {/* 3. Текст под правым фото */}
        <div className="about__text about__text--top">
          <h3>ПРИВАТНАЯ<br />ТЕРРИТОРИЯ В САМОМ<br /><span className="accent">ЦЕНТРЕ ГОРОДА</span></h3>
        </div>
        
        {/* 4. Среднее левое фото */}
        <img src={about3} alt="Балкон" className="about__img about__img--3" />
        
        {/* 5. Среднее правое (верхнее) */}
        <img src={about4} alt="Интерьер" className="about__img about__img--4" />
        
        {/* 6. Правое нижнее (высокое) */}
        <img src={about5} alt="Ландшафт" className="about__img about__img--5" />
        
        {/* 7. Текст слева снизу */}
        <div className="about__text about__text--bottom">
          <p>Архитектура, вдохновленная монументальной классикой. Коллекционные квартиры с высокой инвестиционной ценностью</p>
        </div>
        
        {/* 8. Нижнее широкое фото */}
        <img src={about6} alt="Комплекс" className="about__img about__img--6" />
      </div>
    </section>
  );
};

export default AboutTheProject;
  