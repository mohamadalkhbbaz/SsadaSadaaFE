import React from 'react'

const ChildrenProp = ({children}) => {
  return (
    <div>
        <h1>ChildrenProp</h1>
        {/* {props.children} */}
        {/* or */}
        {children}
        <hr></hr>
    </div>
  )
}

export default ChildrenProp