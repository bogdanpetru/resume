import React from 'react'
import Profile from './Profile'
import bemConstructor from './bemConstructor'

const rootBEM = bemConstructor('react-resume')

const Profiles = ({ profiles }) => <div className={rootBEM({ child: 'profiles' })}>
	{profiles.map(profile => <Profile key={profile.network} {...profile} />)}
</div>

export default Profiles