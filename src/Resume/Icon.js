import React from 'react'

const Icon = ({ name, size }) => {
  return <i style={{ fontSize: size }} className={`ico fa fa-${name}`} />
}

Icon.defaultProps = {
  size: 12
}

export default Icon