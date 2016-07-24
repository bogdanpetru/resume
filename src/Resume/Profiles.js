import React from 'react'
import Profile from './Profile'

const Profiles = ({ profiles }) => <div className='profiles'>
	{profiles.map(profile => <Profile iconName={profile.icon} key={profile.network} {...profile} />)}
</div>

export default Profiles