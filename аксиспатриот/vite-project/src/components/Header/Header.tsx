import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

import mainWhite from '../../assets/icons/mainWhite.svg';
import mainYellow from '../../assets/icons/mainYellow.svg';
import mainBlack from '../../assets/icons/mainBlack.svg';

import maxBlack from '../../assets/icons/maxBlack.svg';
import maxYellow from '../../assets/icons/maxYellow.svg';
import maxBrown from '../../assets/icons/maxBrown.svg';

import tegBlack from '../../assets/icons/tegBlack.svg';
import tegYellow from '../../assets/icons/tegYellow.svg';
import tegBrown from '../../assets/icons/tegBrown.svg';

import zvonBlack from '../../assets/icons/zvonBlack.svg';
import zvonYellow from '../../assets/icons/zvonYellow.svg';
import zvonBrown from '../../assets/icons/zvonBrown.svg';

const Header: React.FC = () => {
  const [stateIndex, setStateIndex] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  // Массивы иконок
  const logos = [mainWhite, mainYellow, mainBlack];
  const maxIcons = [maxBlack, maxYellow, maxBrown];
  const tegIcons = [tegBlack, tegYellow, tegBrown];
  const zvonIcons = [zvonBlack, zvonYellow, zvonBrown];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = [
        { id: 'hero', endIndex: 0 },      
        { id: 'about', endIndex: 1 },       
        { id: 'concept', endIndex: 1 },    
        { id: 'location', endIndex: 1 },    
        { id: 'evening', endIndex: 1 },     
        { id: 'teracca', endIndex: 2 },     
        { id: 'service', endIndex: 1 },     
        { id: 'parking', endIndex: 1 },     
        { id: 'layouts', endIndex: 1 },     
        { id: 'investments', endIndex: 1 }, 
        { id: 'end', endIndex: 1 },         
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setStateIndex(sections[i].endIndex);
          
          if (headerRef.current) {
            headerRef.current.classList.remove('scrolled', 'header--dark');

            if (sections[i].endIndex !== 0) {
              headerRef.current.classList.add('scrolled');
            }

            if (sections[i].id === 'teracca') {
              headerRef.current.classList.add('header--dark');
            }
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <nav className="nav">
        <ul className="nav__menu">
          <li><button onClick={() => scrollToSection('about')} className="nav__link">О проекте</button></li>
          <li><button onClick={() => scrollToSection('location')} className="nav__link">Расположение</button></li>
          <li><button onClick={() => scrollToSection('concept')} className="nav__link">Концепция</button></li>
          <li><button onClick={() => scrollToSection('layouts')} className="nav__link">Планировки</button></li>
        </ul>
        <div className="nav__logo">
          <img src={logos[stateIndex]} alt="Логотип" className="logo-icon" />
        </div>
        <div className="nav__contacts">
          <div className="icon-wrapper messM">
            <img src={maxIcons[stateIndex]} className="icon-state" alt="Макс" />
          </div> 
          <div className="icon-wrapper mess">
            <img src={tegIcons[stateIndex]} className="icon-state" alt="Телеграм" />
          </div>  
          <div className="icon-wrapper zvon">
            <img src={zvonIcons[stateIndex]} className="icon-state" alt="Звонок" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;