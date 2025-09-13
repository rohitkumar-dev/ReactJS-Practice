import React from 'react'
import logo_img from '../assets/blog_logo.png'
import logo2_img from '../assets/new.jpeg'


export default function Logo({width='100px', height="", className=""}) {
  return (
    <img src={logo2_img} width={width} height={height} alt="logo" className={`${className}`}/>
  )
}
