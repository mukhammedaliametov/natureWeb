import React, { useState } from 'react';
import './About.css'
import Image from '../../images/img-1.jpg'
import Image2 from '../../images/img-2.jpg'

const About = () => {
  return (
    <>
      <div className='section-head'>
        <h1>About</h1>
      </div>
      <div className="about-section">
        <div className="first-about">
          <div className="images" data-aos="fade-right" data-aos-duration="1000">
            <img src={Image} alt="" className='img-1'/>
            <img src={Image2} alt="" className='img-2'/>
          </div>
          <div className="title" data-aos="fade-left" data-aos-duration="2000">
            <h1>Nature <i class="fa-sharp fa-solid fa-leaf"></i></h1><br />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore adipisci tempore reprehenderit magnam quia odit officiis animi accusantium aliquid ducimus.</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati nisi aut fugit veniam debitis magni, odit nesciunt, tempore sint at exercitationem. Deleniti repudiandae maxime dolor odit similique molestias quam!</p>
          </div>
        </div>
        <div className="second-about">
          <div className="title" data-aos="fade-right" data-aos-duration="1000">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi laudantium laborum quasi iusto unde dignissimos autem quo minima quae?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam praesentium magni atque ipsum dolorem ab accusantium laboriosam at quisquam libero. Accusamus voluptas vero sit quod totam dolor quaerat ducimus repellat!</p>
          </div>
          <div className="imgages" data-aos="fade-left" data-aos-duration="2000">
            <img src={Image} alt="" className='img-3'/>
            <img src={Image2} alt="" className='img-4'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;