import React from 'react'
import Icon from './Icon'

const Profile = ({ network, username, url, iconName }) => {
  return <a href={url} target="_blank">
    <Icon name={iconName} />
    {network}
  </a>
}

export default Profile