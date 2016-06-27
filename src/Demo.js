import React, { Component } from 'react'
import data from './data.js'
import Resume from './Resume'

export default class Demo extends Component {
  render() {
    return (
      <Resume data={data} />
    );
  }
}
