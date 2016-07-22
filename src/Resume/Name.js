import React from 'react'
import bemConstructor from './bemConstructor'

const rootBEM = bemConstructor('react-resume')

const Name = ({ name }) => <h1 className = { rootBEM({ child:'name' }) }> 
    {name} 
</h1>

export default Name