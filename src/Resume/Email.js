import React, { Component } from 'react'
import bemConstructor from './bemConstructor'

const rootBEM = bemConstructor('react-resume')


const Email = ({ email }) => <span
	className={rootBEM({ child: 'email' })}>
	{email}
</span>

export default Email