import React from 'react'
import './button-navigation.scss'

const ButtonNavigation = ({
  onClick,
  title,
  icon,
}) => {
  const Icon = icon
  return (
    <div
      className="container-button-navigation" 
      onClick={onClick}>
      <div className="box-button-navigation">
        <Icon />
      </div>
      <span>{title}</span>
    </div>
  )
}

export default ButtonNavigation
