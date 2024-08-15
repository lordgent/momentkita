import React from 'react'
import styled from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styled.navbar}>
        <div className={styled.body}>
            
            <div className="">
            <img src="/assets/icons/logo.svg" alt="search"  className={styled.logo} />
            </div>

            <div className={styled.navLink}>
            <img src="/assets/icons/notif.svg" alt="search" height="24px" />
            </div>

        </div>
    </nav>
  )
}

export default Navbar