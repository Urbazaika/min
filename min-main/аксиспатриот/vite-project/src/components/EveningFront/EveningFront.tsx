import React, { useRef, useEffect, useState } from 'react';
import './EveningFront.css';
import img1Day from '../../assets/images/img1_day.jpg';
import img1Night from '../../assets/images/img1_night.jpg';
import img2Day from '../../assets/images/img2_day.jpg';
import img2Night from '../../assets/images/img2_night.jpg';
import img3Day from '../../assets/images/img3_day.jpg';
import img3Night from '../../assets/images/img3_night.jpg';

const PhotoSequence: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const scrolled = -sectionTop;
      const totalScrollable = sectionHeight - windowHeight;
      let progress = scrolled / totalScrollable;

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      if (progress > 0.33 && progress <= 0.66) {
        setActiveStep(1);
      } else if (progress > 0.66 && progress <= 0.95) {
        setActiveStep(2);
      } else if (progress > 0.95) {
        setActiveStep(3);
      } else {
        setActiveStep(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="photo-sequence" ref={sectionRef}>
      <div className="sticky-wrapper">
        <div className="photos-grid">
          {/* Фото 1 */}
          <div className={`photo-card ${activeStep >= 1 ? 'active' : ''}`}>
            <img src={img1Day} alt="Day 1" className="img-day" />
            <img src={img1Night} alt="Night 1" className="img-night" />
          </div>
          {/* Фото 2 */}
          <div className={`photo-card ${activeStep >= 2 ? 'active' : ''}`}>
            <img src={img2Day} alt="Day 2" className="img-day" />
            <img src={img2Night} alt="Night 2" className="img-night" />
          </div>
          {/* Фото 3 */}
          <div className={`photo-card ${activeStep >= 3 ? 'active' : ''}`}>
            <img src={img3Day} alt="Day 3" className="img-day" />
            <img src={img3Night} alt="Night 3" className="img-night" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhotoSequence;