import React from "react";
import './teracca.css';
import teracca1 from '../../assets/images/teracca.png';
import teracca2 from '../../assets/images/teracca2.png';

const Teracca: React.FC = () => {
  return (
    <section className="teracca-section" id="teracca">
      <img 
        src={teracca1} 
        alt="Teracca Building" 
        className="teracca-main-image"
      />
      <div className="teracca-overlay">
        <h1 className="teracca-title">
          ЭЛЕГАНТНОСТЬ<br />
          И СДЕРЖАННАЯ<br />
          РОСКОШЬ
        </h1>
      </div>
    </section>
  );
};

export default Teracca;