import React, { Component } from 'react'

const bemConstructor = base => ({ child, state }) => {
  let className =  base;

  if (child) {
    className = `${className}__${child}`
  }

  if (state) {
    className = `${className}--${state}`
  }

  return className;
}

const rootBEM = bemConstructor('react-resume')

const Name = ({ name }) => <h1
    className={rootBEM({ child: 'name' })}>
    {name}
  </h1>

const Label = ({ label }) => <h2
    className={rootBEM({ child: 'label' })}>
    {label}
  </h2>

const Email = ({ email }) => <span
    className={rootBEM({ child: 'email' })}>
    {email}
  </span>


const Icon = ({ name }) => {
  return <span>{name}</span>
}

const Profiles = ({ profiles }) => <div className={rootBEM({ child: 'profiles' })}>
    {profiles.map(profile => <Profile key={profile.network} {...profile} />)}
  </div>

const Profile = ({ network, username, url, iconName }) => {
  return <a href={url} target="_blank">
    <Icon name={iconName} />
    {network}
  </a>
}

/**
 * TODO calculate duration
 */
const Experience = ({
  company,
  startDate,
  endDate,
  summary
}) => <div className={rootBEM({ child: "experience" })}>
    <h3>
      {company}
    </h3>
    <div className={rootBEM({ child: "experience-date"})}>
      <span className={rootBEM({ child: "experience-start-date"})}>{startDate}</span> -
      <span className={rootBEM({ child: "experience-end-date"})}>{endDate}</span>
    </div>
    <div className={rootBEM({ child: "experience-end-date"})}>{summary}</div>
</div>

const Work = ({ experiences, title }) => <div className={rootBEM({ child: 'work'})}>
    <h2 className={rootBEM({ child: "work-title"})}>{title}</h2>
    <div className={rootBEM({ child: "work-body" })}>
      {experiences.map(Experience)}
    </div>
  </div>


class Resume extends Component {
  render() {
    const {
      data
    } = this.props

    const {
      basics : {
        name,
        label,
        picture,
        email,
        profiles,
      },
      work
    } = data;

    console.log(email)

    return <div className="react-resume">
      <Name name={name} />
      <Label label={label} />
      <Email label={email} />
      <Profiles profiles={profiles} />
      <Work title={"Professional Experience"} experiences={work} />
    </div>
  }
}

export default Resume
