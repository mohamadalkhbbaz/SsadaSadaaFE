import React from 'react'
import {Link} from 'react-router-dom';

const Content = () => {
  return (
    <div>content
    {/* <a href="/">Go To Home</a> */}
    <Link to="/" > Go To Home</Link>
    </div>
  )
}

export default Content