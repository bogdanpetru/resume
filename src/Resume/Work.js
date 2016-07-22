import React from 'react'
import Experience from './Experience'
import bemConstructor from './bemConstructor'

const rootBEM = bemConstructor('react-resume')

const Work = ({ experiences, title }) => <div className={rootBEM({ child: 'work'})}>
	<h2 className={rootBEM({ child: "work-title"})}>{title}</h2>
	<div className={rootBEM({ child: "work-body" })}>
		{experiences.map(Experience)}
	</div>
</div>

export default Work