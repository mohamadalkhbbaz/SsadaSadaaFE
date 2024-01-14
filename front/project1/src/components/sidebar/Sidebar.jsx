import React from 'react'
import './sidebar.css'

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>ContactUs</a></li>
        <li><a href='#'>Profil</a></li>
        <li><a href='#'>{props.name}</a></li>
      </ul>
    </div>
  )
}

export default Sidebar