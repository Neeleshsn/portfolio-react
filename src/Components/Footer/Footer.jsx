import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/nks_logo.png'
import user_icon from '../../assets/user_icon.svg'


const Fotter = () => {
    return (
        <div className='fotter'>
            <div className="fotter-top">
                <div className="fotter-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple</p>
                </div>
                <div className="fotter-top-right">
                    <div className="fotter-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="fotter-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="fotter-bottom">
                <p className='footer-bottom-left'>@ 2025 Nilesh Singh. All right reserved.</p>
                <div className="fotter-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Fotter