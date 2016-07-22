import React from 'react'
import bemConstructor from './bemConstructor'

const rootBEM = bemConstructor('react-resume')

const Label = ({ label }) => <h2
  className={rootBEM({ child: 'label' })}>
  {label}
</h2>

export default Label