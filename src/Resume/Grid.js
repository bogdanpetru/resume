import React from 'react'

const LeftColumn = ({ children }) => {
  return <div className="left-column" children={children} />
}

const RightColumn = ({ children }) => {
  return <div className="right-column" children={children} />
}

const Container = ({ children }) => {
  return <div className="container" children={children} />
}

export {
	LeftColumn,
	RightColumn,
  Container
}