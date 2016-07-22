import React from 'react'
import bemConstructor from './bemConstructor'

const rootBEM = bemConstructor('react-resume')

const Other = ({ title, items }) => <div className={rootBEM({ child: 'other' })}>
  <h2 className={rootBEM({ child: "other-title"})}>
    {title}
  </h2>
  <div className={rootBEM({ child: "other-items-wrapper" })}>
    {
      items.map(({ name }) => <div 
          key={name}
          className={rootBEM({ child: 'other-item' })}>
          {name}
        </div>
      )
    }
  </div>
</div>

export default Other
