import React from 'react'
import Experience from './Experience'
const rootBEM = bemConstructor('react-resume')

const Work = ({ experiences, title }) => <div className="work">
	<h2 className="work-title">{title}</h2>
	<div className="work-body" children={experiences.map(Experience)} />
</div>

export default Work