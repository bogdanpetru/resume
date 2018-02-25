import React from 'react'
import parseText from '../utils/parseText';

const About = ({ about }) => <div className="about">
	<h2>About</h2>
	<div className="about-content" children={about.map((text) => <p children={parseText(text)} />)} />
</div>

export default About