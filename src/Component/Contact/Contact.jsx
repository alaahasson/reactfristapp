import React, { Component } from 'react'
import Line from '../Line/Line'
import ContactStyle from "../Contact/Contact.module.css"
export default class Contact extends Component {
  render() {
    return (
      <>
      <section className={`${ContactStyle.main} `}>
        < div className="container mb-5">
          <h2>CONTACT ME</h2>
          <Line/>
          <div className="row  justify-content-center">
            <form className='col-lg-6 col-lg-8 col-md-10' action="">
              <input className='form-control my-3 ' type="text" placeholder='Name' />
              <input className='form-control mb-3' type="text" placeholder='Email Address' />
              <input className='form-control mb-3' type="text" placeholder='Phone Number' />
              <textarea className='form-control mb-3' placeholder='Message' ></textarea>
              <button className='btn btn-lg '>Send</button>
            </form>
          </div>

          
        </div>

        <div className={`${ContactStyle.main1} text-white`}>
          <div className="container-fluid ">

            <div className="col-lg-8 row justify-content-center align-items-center mx-auto text-center">

              <div className='col-lg-4 mb-4 mb-sm-5'>
                <div>
                  <h4>LOCATION</h4>
                  <p>2215 John Daniel Drive Clark, MO 65243</p>
                </div>
              </div>

              <div className='col-lg-4 mb-4 mb-sm-5'>
                <div>
                  <h4>AROUND THE WEB</h4>
                  <div className={`${ContactStyle.icons}`}>

                    <a href="">
                      <span>
                      <i class="fa-brands fa-facebook-f"></i>
                      </span>
                    </a>

                    <a href="">
                      <span>
                      <i class="fa-brands fa-twitter"></i>
                      </span>
                    </a>

                    <a href="">
                      <span>
                      <i class="fa-brands fa-linkedin-in"></i></span>
                    </a>

                    <a href="">
                      <span>
                      <i class="fa-brands fa-dribbble"></i></span>
                    </a>
                   
                  </div>
                </div>
              </div>


              <div className='col-lg-4 mb-4'>
                <div>
                  <h4>ABOUT FREELANCER</h4>
                  <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      </section>
      </>
    )
  }
}
