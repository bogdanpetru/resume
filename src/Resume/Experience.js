import React from 'react'

/**
 * TODO calculate duration
 */
const Experience = ({
  company,
  startDate,
  endDate,
  summary
}) => <div className="experience">
    <h3>
      {company}
    </h3>
    <div className="experience-date">
      <span className="experience-start-date">{startDate}</span> -
      <span className="experience-end-date">{endDate}</span>
    </div>
    <div className="experience-end-date">{summary}</div>
</div>

export default Experience