import React from 'react'
import parseText from '../utils/parseText';

const Introduction = ({ introduction }) => {
  return <div 
    className="introduction"
    children={introduction.map(text => {
      console.log(parseText(text))
      return <p children={parseText(text)} />;
    })}
  />
}

export default Introduction