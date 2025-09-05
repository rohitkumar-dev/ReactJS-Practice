import React from 'react'
import logo_img from '../assets/blog_logo.png'

export default function Logo({width='100px'}) {
  return (
    <img src={logo_img} width={width} alt="logo" />
  )
}
