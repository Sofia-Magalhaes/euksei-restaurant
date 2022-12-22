import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Nos Contate</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer_logo" />
        <p className='p__opensans'>"No dia 12 de dezembro de 1972, Cristina Mello nasceu, assim veio a famosa frase eu que sei, junto com sua grande empresa"</p>
        <img src={images.spoon} alt="colher" className='spoon__img' style={{marginTop:15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Horário de Funcionamento</h1>
        <p className='p__opensans'>Segunda-Sexta:</p>
        <p className='p__opensans'>08:00 - 12:00</p>
        <p className='p__opensans'>Sábado-Domingo:</p>
        <p className='p__opensans'>07:00 - 11:00</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Euksei. All Rights reserved.</p>
    </div>
  </div>  
);

export default Footer;
