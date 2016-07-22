import React from 'react'
import bemConstructor from './bemConstructor'

const rootBEM = bemConstructor('react-resume')

const Icon = ({ name }) => {
  return <span>{name}</span>
}

export default Icon