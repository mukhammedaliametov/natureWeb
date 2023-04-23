import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="first-footer">
                <h2>Networks</h2>
                <div className="networks">
                    <a href=""><i class="fa-brands fa-telegram"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                    <a href=""><i class="fa-brands fa-tiktok"></i></a>
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                </div>
            </div>
            <div className="second-footer">
                <div className="company-info">
                    <h1 className='logo'>
                        Nature <i class="fa-sharp fa-solid fa-leaf"></i>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit culpa ipsa maiores ad a qui.</p>
                </div>
                <div className="pages-links">
                    <h2>Pages Links</h2>
                    <div className="links">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Contact</a>
                        <a href="">Sign Up</a>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="informations">
                        <h3>Contact</h3>
                        <p><i class="fa-solid fa-house"></i> Karakalpakstan, Kanlikul City 1</p>
                        <a href="">
                            <i class="fa-solid fa-envelope"></i> example@gmail.com
                        </a>
                        <a href="">
                            <i class="fa-solid fa-phone"></i> +998(99)000-00-00
                        </a>
                        <a href="">
                            <i class="fa-solid fa-phone"></i> +998(99)000-00-00
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <span>Copyright &copy;2023. All Rights Reseved</span>
                <span>Mukhammedali Ametov</span>
            </div>
        </div>
    );
};

export default Footer;