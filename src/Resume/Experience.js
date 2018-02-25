import React from 'react';
import parseText from '../utils/parseText';

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
        <span className="date experience__start-date">{startDate}</span> - <span className="date experience__end-date">{endDate}</span>
      </div>
    </header>
    <div className="summary" children={parseText(summary)} />
  </div>

export default Experience