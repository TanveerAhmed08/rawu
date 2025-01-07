import React from 'react'
import Card from '../pages/UI/Card'

const Trainer = ({ image, name, job, socials }) => {
    return (
        <Card className="trainer">
            <div className="trainer-image">
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{job}</p>
            <div className="trainer-social">
                {
                    socials.map(({ icon, link }, index) => {
                        return (
                            <a key={index} href={link} target='_blank'>{icon}</a>
                        )
                    })
                }
            </div>
        </Card>

    )
}

export default Trainer
