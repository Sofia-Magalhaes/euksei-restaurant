import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='sobre'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="letras eks" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Sobre Nós</h1>
        <img src={images.spoon} alt="sobre_colher" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Saber Mais</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="sobre_faca" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Nossa História</h1>
        <img src={images.spoon} alt="sobre_colher" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Saber Mais</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
