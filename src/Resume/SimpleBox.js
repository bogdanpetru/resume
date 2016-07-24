import React from 'react'

const Other = ({ title, items }) => <div className='other'>
  <h2 className="other-title">
    {title}
  </h2>
  <div className="other-items-wrapper">
    {
      items.map(({ name }) => <div 
          key={name}
          className='other-item'>
          {name}
        </div>
      )
    }
  </div>
</div>

export default Other
