import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { BiLogoWhatsapp } from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laboriosam neque perferendis explicabo eaque alias, numquam in ipsa perspiciatis similique?
      </Header>

      <section className='contact'>
        <div className="container contact-container">
          <div className="contact-wrapper">
            <a href="mailto:tanveerahmed08.1999@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail /></a>
            <a href="http://m.me/tanveerahmed" target='_blank' rel='noreferrer noopener'><BsMessenger /></a>
            <a href="http://wa.me/+923053565751" target='_blank' rel='noreferrer noopener'><BiLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
