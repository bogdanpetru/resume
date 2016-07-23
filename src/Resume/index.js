import React, { Component } from 'react'
import bemConstructor from './bemConstructor'
import Name from './Name'
import Email from './Email'
import Label from './Label'
import Icon from './Icon'
import Profiles from './Profiles'
import Work from './Work'
import Other from './Other'
import Header from './Header'
import About from './About'
import style from './style.less'

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
        about
      },
      profiles,
      work,
      other
    } = data;

    console.log(email)

    return <div className="resume">

      <Header>
        <Name name={name} />
        <Label label={label} />
        <Email label={email} />
        <Profiles profiles={profiles} />
      </Header>
      
      <div className="content">
        <div className="left-column">
          <About about={about} />
        </div>
        <div className="right-column">
          <Work title={"Professional Experience"} experiences={work} />
          <Other title={other.title} items={other.items} /> 
        </div>
      </div>
    </div>
  }
}

export default Resume
