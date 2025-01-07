import React from 'react'
import './about.css'
import Header from '../../components/Header'
import image from '../../images/header_bg_1.jpg'
import storyimage from '../../images/about1.jpg'
import visionimage from '../../images/about2.jpg'
import missionimage from '../../images/about3.jpg'


const About = () => {
  return (
    <>
      <Header title="About Us" image={image}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique maxime tenetur fuga quibusdam. Sunt, et pariatur architecto magnam nam deserunt.
      </Header>

      <section className="about-story">
        <div className="container about-story-container">
          <div className="about-section-image">
            <img src={storyimage} alt="Our Story Image" />
          </div>
          <div className="about-section-contact">
            <h1>Our Story</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam error consectetur. Commodi sed ab numquam cupiditate tempora nobis officiis ullam facere? Commodi, ullam accusantium, voluptas eum, asperiores quod minus eligendi ipsum necessitatibus mollitia vitae nemo tempora recusandae impedit accusamus!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint, blanditiis aliquam porro expedita iusto sit rem voluptatem cum distinctio!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorem.</p>
          </div>
        </div>
      </section>
      <section className="about-vision">
        <div className="container about-vision-container">
          <div className="about-section-contact">
            <h1>Our Vision</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam error consectetur. Commodi sed ab numquam cupiditate tempora nobis officiis ullam facere? Commodi, ullam accusantium, voluptas eum, asperiores quod minus eligendi ipsum necessitatibus mollitia vitae nemo tempora recusandae impedit accusamus!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint, blanditiis aliquam porro expedita iusto sit rem voluptatem cum distinctio!
            </p>
          </div>
          <div className="about-section-image">
            <img src={visionimage} alt="Our vision Image" />
          </div>
        </div>
      </section>
      <section className="about-mission">
        <div className="container about-mission-container">
          <div className="about-section-image">
            <img src={missionimage} alt="Our Mission Image" />
          </div>
          <div className="about-section-contact">
            <h1>Our Mission</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam error consectetur. Commodi sed ab numquam cupiditate tempora nobis officiis ullam facere? Commodi, ullam accusantium, voluptas eum, asperiores quod minus eligendi ipsum necessitatibus mollitia vitae nemo tempora recusandae impedit accusamus!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint, blanditiis aliquam porro expedita iusto sit rem voluptatem cum distinctio!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorem.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
