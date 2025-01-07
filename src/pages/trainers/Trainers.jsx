import React from 'react'
import './trainers.css'
import Headerimage from '../../images/header_bg_5.jpg'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Header from '../../components/Header'
import { trainers } from '../../data'
import Trainer from '../../components/Trainer'

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={Headerimage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus quia, distinctio dolorem consequatur nulla cum consequuntur harum unde? Nihil!
      </Header>
      <section className='trainers'>
        <div className="container trainer-container">
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return (<Trainer key={id} image={image} name={name} job={job} socials={
                [
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebook />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]
              } />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers
