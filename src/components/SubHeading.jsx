import React from 'react'

const SubHeading = ({className,text}) => {
  return (
    <h2 className={`font-sans font-bold text-[39px] text-primary ${className}`}>{text}</h2>
  )
}

export default SubHeading