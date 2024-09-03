import React from 'react';
import '../styles/Footer.css';
import WhatsAppIcon from '../img/whatsapp_6422213.svg'
import TwitterIcon from '../img/twitter-alt-circle_12107562.svg'


function Footer() {
  return (
    <footer>
        <div>
            <img src={WhatsAppIcon} alt="WhatsApp" className='Icon' />
            <img src={TwitterIcon} alt="Twitter" className='Icon'/>
        </div>
    </footer>
  )
}

export default Footer