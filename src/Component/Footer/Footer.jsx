import React, { Component } from 'react'
import footerStyle from "../Footer/Footer.module.css";
export default class Footer extends Component {
  render() {
    return (
      <>
       <footer className={`${footerStyle.main} `}>
        <div>
          <p>Copyright © Your Website 2021</p>
        </div>
       </footer>
      </>
    )
  }
}
