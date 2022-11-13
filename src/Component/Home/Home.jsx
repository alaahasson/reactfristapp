import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import HomeStyle from '../Home/Home.module.css'
import img1 from '../image/avataaars.svg'
import Line from '../Line/Line'

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <header className={`${HomeStyle.main} vh-100  `}>
          <div className="container mt-5">
            <img src={img1} className="w-25" />
            <h1>START REACT</h1>
            <Line/>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </header>
      </>
    )
  }
}
