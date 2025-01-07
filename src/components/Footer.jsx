import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt="" />
                    </Link>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate voluptatem omnis at deleniti odio pariatur alias adipisci nesciunt velit voluptatum id, reprehenderit nostrum facere in fugiat architecto culpa doloribus.
                    </p>
                    <div className="footer-social">
                        <a href="#" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                        <a href="#" target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
                        <a href="#" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter /></a>
                        <a href="#" target='_blank' rel='noreferrer noopener'><AiOutlineInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plan</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Event</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>
                <article>
                    <h4>Get in touch</h4>
                    <Link to="/contact">Contact US</Link>
                    <Link to="/s">Support</Link>

                </article>
            </div>
            <div className="footer-copyright">
                <small>2024 Tanveer Ahmed &copy; | All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
