import React from 'react';
import './experience.css'
import {FaReact} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaDatabase} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>My</h5>
            <h2>Experience</h2>
            <div className='experience__container'>
                <div className='languages__container'>
                    <h3>Language Proficiency</h3>
                    <div className='languages__content'>
                        <article className='language__details'>
                            <FaHtml5 className='icons'/>
                            <h4>HTML</h4>
                        </article>
                        <article className='language__details'>
                            <FaCss3Alt className='icons'/>
                            <h4>CSS</h4>
                        </article>
                        <article className='language__details'>
                            <FaPython className='icons'/>
                            <h4>Python</h4>
                        </article>
                        <article className='language__details'>
                            <SiCplusplus className='icons'/>
                            <h4>C++/C</h4>
                        </article>
                        <article className='language__details'>
                            <FaDatabase className='icons'/>
                            <h4>SQL</h4>
                        </article>
                        <article className='language__details'>
                            <FaReact className='icons'/>
                            <h4>React</h4>
                        </article>
                        <article className='language__details'>
                            <FaNodeJs className='icons'/>
                            <h4>Node JS</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience