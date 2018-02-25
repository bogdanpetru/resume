import React from 'react'

const Other = ({ title, items }) => <div className='other'>
  <h2 className="simplebox-title">
    {title}
  </h2>
  <ul className="simplebox-items-wrapper">
    {
      items.map(({ name }) => <li 
          key={name}
          className='other-item'>
          {name}
        </li>
      )
    }
  </ul>
</div>

export default Other
