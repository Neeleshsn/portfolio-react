import React from 'react'
import './Hero.css'
import profile_img from '../../assets/hero_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Nilesh Singh,</span> frontend developer based in INDIA.</h1>
            <p>I am a Frontend Developer from California, INDIA with 10 years of experience in multiple comapines like Microsoft, Tesla and Aaple.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
