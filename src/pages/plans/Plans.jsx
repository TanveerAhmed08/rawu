import React from "react";
import "./plans.css";
import Header from "../../components/Header";
import headerimage from '../../images/header_bg_4.jpg'
import { plans } from "../../data";
import Card from "../UI/Card";




const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={headerimage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam ab hic sit corrupti. Ab tempora dolorem unde delectus esse!
      </Header>
      <section className="plans">
        <div className="container plan-container">
          {
            plans.map(({ id, name, desc, price, features }) => {
              return (
                <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1><h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    features.map(({ feature, available }, index) => {
                      return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                    })
                  }
                  <button className="btn lg">Choose Plan</button>
                </Card>
              )

            })
          }
        </div>
      </section>
    </>
  )
};


export default Plans;
