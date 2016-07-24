import React from 'react'
import Icon from './Icon'

const Profile = ({ network, username, url, iconName, showPrint, hideWeb }) => {
  const Factory = url? (params) => <a {...params} /> : (params) => <span {...params} />
  let className = 'profile'

  if (showPrint) {
    className += ' showPrint'
  }

  if (hideWeb) {
    className += ' hideWeb'
  }

  return <Factory className={className} href={url} target="_blank">
    <Icon 
      name={iconName} 
      size={14}
    />
    {network}
  </Factory>
}

export default Profile