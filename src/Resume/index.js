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
        email
      }
    } = data;

    console.log(email)

    return <div className="react-resume">
      <Name name={name} />
      <Label label={label} />
      <Email label={email} />
    </div>
  }
}

export default Resume
