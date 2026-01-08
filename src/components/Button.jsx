import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <div className={` bg-black font-sans font-bold text-base text-white text-center ${className}`}>{btnText}</div>
  )
}

export default Button