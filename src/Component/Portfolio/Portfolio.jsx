import React, { Component } from 'react'
import Line from '../Line/Line'
import PortfolioStyle from "../Portfolio/Portfolio.module.css"
import Img1 from '../image/1.png';
import Img2 from '../image/2.png';
import Img3 from '../image/3.png';
import Img4 from '../image/4.png';
import Img5 from '../image/5.png';
import Img6 from '../image/6.png';

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <section className={`${PortfolioStyle.portfolio}`}>
          <div className="container">
            <h2 className='text-center' >PORTFOLIO</h2>
            <Line />
            <div className="row">


              <div className={`${PortfolioStyle.card} col-lg-4 col-md-6`}>
                <div>
                  <img className='w-100 ' src={Img1} alt="" />
                </div>
              </div>

              <div className={`${PortfolioStyle.card} col-lg-4 col-md-6`}>
                <div>
                  <img className='w-100 ' src={Img2} alt="" />
                </div>
              </div>

              <div className={`${PortfolioStyle.card} col-lg-4 col-md-6`}>
                <div>
                  <img className='w-100 ' src={Img3} alt="" />
                </div>
              </div>

              <div className={`${PortfolioStyle.card} col-lg-4 col-md-6`}>
                <div>
                  <img className='w-100 ' src={Img4} alt="" />
                </div>
              </div>

              <div className={`${PortfolioStyle.card} col-lg-4 col-md-6`}>
                <div>
                  <img className='w-100 ' src={Img5} alt="" />
                </div>
              </div>

              <div className={`${PortfolioStyle.card} col-lg-4 col-md-6`}>
                <div>
                  <img className='w-100 ' src={Img6} alt="" />
                </div>
              </div>



            </div>
          </div>
        </section>
      </>
    )
  }
}
