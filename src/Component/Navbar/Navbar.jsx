import React, { Component } from 'react'
import NavbarStyle from '../Navbar/Navbar.module.css'
export default class Navbar extends Component {
  render() {
    return (
      <>
          <nav className={` ${NavbarStyle.navbar}  ` }>
            <div className= {` ${NavbarStyle.inner} container  ` }>
              <div>
                <a className={`${NavbarStyle.logo}`} href="">START REACT</a>
              </div>
              <div className=' col-8'>
                <ul className='w-100 '>
                  <li><a className = "p-3" href="">PORTFOLIO</a></li>
                  <li><a href="">ABOUT</a></li>
                  <li><a href="">CONTACT</a></li>
                </ul>
              </div>
            </div>
          </nav>
      </>
    )
  }
}
