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
  <header className="experience__header">
    <h3>
      {company}
    </h3>
    <div className="experience-date">
      <span className="date experience__start-date">{startDate}</span> -
      <span className="date experience__end-date">{endDate}</span>
    </div>
  </header>
  <div className="summary">{summary}</div>
</div>

export default Experience