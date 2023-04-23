import React from 'react';
import './Home.css'
import Video from '../../videos/hero_bg_video.mp4'

const Home = () => {
    return (
        <>
            <video src={Video} autoPlay loop muted></video>
            <div className='home-section'>
                <h1>
                    Nature <i class="fa-sharp fa-solid fa-leaf"></i>
                </h1>
                <h3>This website is about nature</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eveniet?</p>
                <a href="">Get Started</a>
                <a href="">Watch Video <i class="fa-solid fa-circle-play"></i></a>
            </div>
        </>
    );
};

export default Home;