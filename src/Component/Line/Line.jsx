import React, { Component } from 'react'
import lineStyle from "../Line/Line.module.css";

export default class Line extends Component {
    render() {
        return (
            <>
                <div className='my-4 d-flex justify-content-center align-items-center'>

                    <div className={`${lineStyle.line}`}></div>
                    <i className=" px-3 fa-solid fa-star fa-2x"></i>
                    <div className={`${lineStyle.line}`}></div>

                </div>
            </>
        )
    }
}
