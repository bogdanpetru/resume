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
import { LeftColumn, RightColumn, Container, Column } from './grid'

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
      skills,
      languages,
      interests
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
        <Container>
          <LeftColumn>
            <About about={about} />
            <SimpleBox title={skills.title} items={skills.items} /> 
            <SimpleBox title={interests.title} items={interests.items} /> 
          </LeftColumn>
          <RightColumn>
            <Work title={"Professional Experience"} experiences={work} />
            <Container>
              <Column>
                <SimpleBox title={languages.title} items={languages.items} /> 
              </Column>
              <Column>
                <SimpleBox title={other.title} items={other.items} /> 
              </Column>
            </Container>
          </RightColumn>
        </Container>
      </div>
    </div>
  }
}

export default Resume
