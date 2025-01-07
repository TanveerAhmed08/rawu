import React from 'react'
import SectionHead from './SectionHead'
import { FaCrown } from 'react-icons/fa'
import { programs } from '../data'
import Card from '../pages/UI/Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'

const Programs = () => {
    return (
        <>
            <section className="program">
                <div className="container program-container">
                    <SectionHead icon={<FaCrown />} title="Programs" />
                    <div className="program-wrapper">
                        {
                            programs.map(({ id, icon, title, info, path }) => {
                                return (
                                    <Card className="programs-program" key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{info}</small>
                                        <Link to={path} className='btn sm'>Learn more <AiFillCaretRight /></Link>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Programs
