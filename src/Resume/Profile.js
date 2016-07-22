import React from 'react'
import bemConstructor from './bemConstructor'
import Icon from './Icon'

const rootBEM = bemConstructor('react-resume')

const Profile = ({ network, username, url, iconName }) => {
  return <a href={url} target="_blank">
    <Icon name={iconName} />
    {network}
  </a>
}

export default Profile