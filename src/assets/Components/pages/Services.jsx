import React from 'react';
import { servicesItems, servicesItems1 } from '../ServicesItem';
import "./Services.css"

const Services = () => {
  return (
    <>
      <div className="section-head">
        <h1>Services</h1>
      </div>
      <div className="container">
        <div className="card-content">
          {servicesItems.map((item, index) => {
            return (
              <div key={index} className='card' data-aos={item.dataaos} data-aos-duration="2000">
                <img src={item.img} asd alt="" />
                <h1>{item.title}</h1>
                <p>{item.info}</p>
                <a href={item.link}>{item.button}</a>
              </div>
            )
          })}
        </div>
        <div className="card-content">
          {servicesItems1.map((item, index) => {
            return (
              <div key={index} className='card' data-aos={item.dataaos} data-aos-duration="2000">
                <img src={item.img} asd alt="" />
                <h1>{item.title}</h1>
                <p>{item.info}</p>
                <a href={item.link}>{item.button}</a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Services;