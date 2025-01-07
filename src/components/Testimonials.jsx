import React, { useState } from 'react'
import SectionHead from './SectionHead'
import { ImQuotesLeft } from 'react-icons/im'
import Card from '../pages/UI/Card'
import { testimonials } from '../data'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'


const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const { name, quote, job, avatar } = testimonials[index]

    const prevtestimonialhandler = () => {
        setIndex(prev => prev - 1);
        if (index <= 0) {
            setIndex(testimonials.length - 1)
        }

    }
    const nexttestimonialhandler = () => {
        setIndex(prev => prev + 1);
        if (index >= testimonials.length - 1) {
            setIndex(0)
        }
    }


    return (
        <section className='testimonials'>
            <div className="container testimonial-container">
                <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonial-head" />
                <Card className="testimonials">
                    <div className="testimonial-avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className='testimonial-quotes'>{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className='testimonial-title'>{job}</small>
                </Card>
                <div className="testimonial-btn-container">
                    <button className="testimonial-btn" onClick={prevtestimonialhandler}><IoIosArrowDropleftCircle /></button>
                    <button className="testimonial-btn" onClick={nexttestimonialhandler}><IoIosArrowDroprightCircle /></button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
