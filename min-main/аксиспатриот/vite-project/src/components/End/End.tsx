import React from 'react';
import './End.css';

const End: React.FC = () => {
  return (
    <section id="end" className="end">
      <div className="container">
        <h2 className="end__title">ГОТОВЫ СТАТЬ ЧАСТЬЮ АКСИС ПАТРИОТ?</h2>
        <p className="end__subtitle">
          Оставьте заявку и получите персональную презентацию
        </p>
        <form className="end__form">
          <input type="text" placeholder="Ваше имя" className="end__input" />
          <input type="tel" placeholder="Телефон" className="end__input" />
          <button type="submit" className="end__btn">
            Отправить заявку
          </button>
        </form>
        <p className="end__footer">
          © 2024 АКСИС ПАТРИОТ. Все права защищены.
        </p>
      </div>
    </section>
  );
};

export default End;