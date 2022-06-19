import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill />
            </article>
          </div>
        </div>
        <div className="experience-backend">

        </div>
      </div>
    </section>
  )
}

export default Experience