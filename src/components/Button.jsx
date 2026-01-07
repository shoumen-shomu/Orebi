import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <div className={`py-7 px-24 bg-black font-sans font-bold text-base text-white text-center ${className}`}>{btnText}</div>
  )
}

export default Button