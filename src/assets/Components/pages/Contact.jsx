import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="section-head">
                <h1>Contact</h1>
            </div>
            <div className="contact-section">
                <div className="forms">
                    <form>
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" placeholder='John Doe' required/><br />
                        <label htmlFor="email">Email</label><br />
                        <input type="text" id="email" placeholder='example@gmail.com' required/><br />
                        <label htmlFor="phonen">Phone Number</label><br />
                        <input type="text" id="phonen" placeholder='+998(00)000-00-00' required/><br />
                        <textarea placeholder='Message' required></textarea><br />
                        <button className='btn'>Sending</button>
                    </form>
                </div> 
                <div className="informations">
                    <h5>Info</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus, beatae aspernatur at tenetur cumque nam exercitationem dolores odit deleniti?</p>
                    <h5>Networks</h5>
                    <div className="network">
                        <a href=""><i class="fa-brands fa-telegram"></i></a>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        <a href=""><i class="fa-brands fa-tiktok"></i></a>
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                    </div>
                    <h5>Location</h5>
                    <p><i class="fa-solid fa-house"></i> Karakalpakstan, Kanlikul City 1</p>
                    <h5>Contact</h5>
                    <a href="">
                        <i class="fa-solid fa-envelope"></i> example@gmail.com
                    </a>
                    <a href="">
                        <i class="fa-solid fa-phone"></i> +998(99)000-00-00
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;