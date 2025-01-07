import React from 'react'
import Image from '../images/values.jpg'
import { GiCutDiamond } from 'react-icons/gi'
import SectionHead from './SectionHead'
import { values } from '../data'
import Card from '../pages/UI/Card'

const Values = () => {
    return (
        <>
            <section className="values">
                <div className="container value-container">
                    <div className="value-left">
                        <div className="value-image">
                            <img src={Image} alt="Values image" />
                        </div>
                    </div>
                    <div className="value-right">
                        <SectionHead icon={<GiCutDiamond />} title="Values" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        <div className="value-wrapper">
                            {
                                values.map(({ id, icon, title, desc }) => {
                                    return (
                                        <Card key={id} className="values-value">
                                            <span>{icon}</span>
                                            <h4>{title}</h4>
                                            <small>{desc}</small>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Values
