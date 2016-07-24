import React, { Component } from 'react'
import bemConstructor from './bemConstructor'
import Name from './Name'
import Email from './Email'
import Introduction from './Introduction'
import Label from './Label'
import Icon from './Icon'
import Profiles from './Profiles'
import Work from './Work'
import SimpleBox from './SimpleBox'
import Header from './Header'
import About from './About'
import Space from './Space'
import { LeftColumn, RightColumn, Container } from './grid'

import 'font-awesome/css/font-awesome.css';
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
        about,
        introduction
      },
      profiles,
      work,
      other,
      skills
    } = data;

    console.log(email)

    return <div className="resume">

      <Header>
        <Container>
          <LeftColumn>
            <Name name={name} />
            <Label label={label} />
            <Introduction introduction={introduction} />
          </LeftColumn>
          <RightColumn>
            <Space />
            <Profiles profiles={profiles} />
          </RightColumn>
        </Container>
      </Header>
      <div className="content">
        <About about={about} />
        <Work title={"Professional Experience"} experiences={work} />
        <Container>
          <LeftColumn>
            <SimpleBox title={skills.title} items={skills.items} /> 
          </LeftColumn>
          <RightColumn>
            <SimpleBox title={other.title} items={other.items} /> 
          </RightColumn>
        </Container>
      </div>
    </div>
  }
}

export default Resume
