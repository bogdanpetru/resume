import React from 'react'
import Profile from './Profile'

const Profiles = ({ profiles }) => <div className='profiles'>
	{profiles.map(profile => <Profile key={profile.network} {...profile} />)}
</div>

export default Profiles