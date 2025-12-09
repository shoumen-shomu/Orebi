import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-myContainer mx-auto ${className}`}>{children}</div>
  )
}

export default Container