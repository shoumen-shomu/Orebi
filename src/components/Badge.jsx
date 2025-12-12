import React from 'react'

const Badge = ({badgeText,className}) => {
  return (
    <div className={` bg-primary py-2.25 px-7.5 font-sans font-bold text-sm text-white ${className}`}>{badgeText}</div>
  )
}

export default Badge