import React from 'react';
import './Concept.css';
import conceptImg from '../../assets/images/concept.jpg';
import conceptImg2 from '../../assets/images/concept2.jpg';

const Concept: React.FC = () => {
  return (
    <section id="concept" className="concept">
      <div className="container">
        <div className="concept__content">
            <div className='concept_textMain'>            <h3>ТЕРРИТОРИЯ ДЛЯ <br /> ТЕХ, КТО ВЫБИРАЕТ <br /> <span className='textYellowconcept'>ПЕРВЫЙ КЛАСС</span></h3></div>
            <div className='concept_textBottom'> <p>АКСИС ПАТРИОТ - это закрытый формат <br /> проживания в центре Ставрополя. Здесь <br />создается не просто жилое пространство, <br />а особая среда для людей с высоким уровнем <br /> требований к качеству жизни</p></div>
          <img src={conceptImg} alt="Концепция" className="concept__img" />
            <img src={conceptImg2} alt="Концепция" className='concept_img2' />
            <div className='concept_textEnd'>Величественная геометрия фасадов, <br /> торжественные входные порталы <br />и элегантное лобби формируют атмосферу <br /> статуса и безупречного вкуса <br /><br />Это адрес, который говорит за вас.</div>
        </div>
      </div>
    </section>
  );
};

export default Concept;