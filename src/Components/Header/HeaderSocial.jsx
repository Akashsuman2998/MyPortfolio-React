import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'
import {ImYoutube} from 'react-icons/im'
const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/akash-suman-064469199" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Akashsuman2998" target="_blank"><IoLogoGithub/></a>
        <a href="https://youtu.be/heWnT9I_Gj0" target="_blank"><ImYoutube/></a>
    </div>
  )
}

export default HeaderSocial