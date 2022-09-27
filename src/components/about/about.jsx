import React from 'react';
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {RiComputerLine} from 'react-icons/ri'
import {AiOutlineDatabase} from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>Me</h2>

            <div className="container about__container">
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='about-me'></img>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Education</h5>
                            <small>Oregon State University</small>
                        </article>

                        <article className='about__card'>
                            <RiComputerLine className='about__icon'/>
                            <h5>Major</h5>
                            <small>Computer Science</small>
                        </article>

                        <article className='about__card'>
                            <AiOutlineDatabase className='about__icon'/>
                            <h5>Focus</h5>
                            <small>Web Design & Development</small>
                        </article>
                    </div>

                    <p>
                        I am in my senior year at Oregon State University studying Computer Science 
                        with a Web Design and Development focus. I have been writing code since highschool 
                        though. I've always had an interest in computers since I was young. I always was the
                        person to call when someone needed help with their computer. Due to being a first
                        generation Vietnamese American, I had to help my family become technologically literate.
                        Through this journey, I learned a lot about computers and developed a passion in helping
                        others use them easier.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Contact</a>

                </div>
            </div>
        </section>
    )
}

export default About