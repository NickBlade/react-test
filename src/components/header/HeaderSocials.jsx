import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" rel="noreferrer" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials