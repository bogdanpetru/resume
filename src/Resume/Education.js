import React from 'react'

const Education = ({ title, text }) => <div className='education'>
  <h2 className="education-title">
    {title}
  </h2>
  <div className="education-items-wrapper">
    {text}
  </div>
</div>

export default Education
