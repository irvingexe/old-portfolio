import React, { Component } from 'react'
import '../../styles/landing.css'
import arrow from '../../assets/arrow.svg'

export default class Cover extends Component {
    render() {
        return (
            <div id="cover">
                <p className="center">
                    Hey! <br/>
                    I’m Irving Mariscales, <br/>
                    a software developer with a taste for design and interactivity
                </p>

                <label id="arrow" className="center">
                    <img alt="" src={arrow} className="up"/>
                </label>
            </div>
        )
    }
}
