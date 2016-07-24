import React from 'react'

const About = ({ about }) => <div className="about">
	<h2>About</h2>
	<div className="about-content" children={about.map((text) => <p>{text}</p>)} />
</div>

export default About