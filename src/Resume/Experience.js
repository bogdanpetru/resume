import React from 'react'
import bemConstructor from './bemConstructor'

const rootBEM = bemConstructor('react-resume')


/**
 * TODO calculate duration
 */
const Experience = ({
  company,
  startDate,
  endDate,
  summary
}) => <div className={rootBEM({ child: "experience" })}>
    <h3>
      {company}
    </h3>
    <div className={rootBEM({ child: "experience-date"})}>
      <span className={rootBEM({ child: "experience-start-date"})}>{startDate}</span> -
      <span className={rootBEM({ child: "experience-end-date"})}>{endDate}</span>
    </div>
    <div className={rootBEM({ child: "experience-end-date"})}>{summary}</div>
</div>

export default Experience