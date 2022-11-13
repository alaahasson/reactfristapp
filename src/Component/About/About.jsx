import React, { Component } from 'react'
import Line from '../Line/Line'
import AboutStyle from '../About/About.module.css'

export default class About extends Component {
  render() {
    return (
      <>
        <section className={`${AboutStyle.main}`}>
          <div className="container">
            <h2 className='text-center'>ABOUT</h2>
            <Line/>
            <div className="row justify-content-md-center">

              <div className='col-lg-6 col-md-8  mb-sm-3'>
                <p className='col-lg-6  ms-lg-auto text-lg-end mx-lg-0 col-md-9 col-sm-11 text-sm-center mx-sm-auto'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>

              <div className='col-lg-6 col-md-8 '>
                <p className='col-lg-6 me-lg-auto text-lg-start mx-lg-0  col-md-9 col-sm-11 text-sm-center mx-sm-auto '>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>

            </div>
          </div>
        </section>
      </>
    )
  }
}
