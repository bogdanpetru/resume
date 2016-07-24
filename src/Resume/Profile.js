import React from 'react'
import Icon from './Icon'

const Profile = ({ network, username, url, iconName }) => {
  return <a className="profile" href={url} target="_blank">
    <Icon 
      name={iconName} 
      size={14}
    />
    {network}
  </a>
}

export default Profile