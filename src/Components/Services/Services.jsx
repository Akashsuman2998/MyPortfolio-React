import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './Services.css'
const Services = () => {
  return (
    <>
    <section id='services'>
      <h5>What i do</h5>
      <h2>Work</h2>
      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Experience with web and mobile app design.

</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Strong typography, layout and visual design skills.</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Working knowledge of responsive design and grid principles.</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Key industry tools, including Photoshop.</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>User research.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='services'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Familiarity with debugging problems using appropriate tools</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Working knowledge of NoSQL databases</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Knowledge of version control systems, such as GIT</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Agile with project setup</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Knowledge of advanced libraries like Redux</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className='services'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>youtuber</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>vlogger</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Presentation skills</p>
            </li>
            <li>git 
        <BiCheck className='service__list-icon'/>
        <p>social media marketing</p>
            </li>
            <li>
        <BiCheck className='service__list-icon'/>
        <p>Enterprenour</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
 
    </>
  )
}

export default Services