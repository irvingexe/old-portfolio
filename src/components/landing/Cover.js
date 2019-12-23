import React, { Component } from 'react'
import '../styles/landing.css'
import arrow from '../../assets/arrow.svg'

export default class Cover extends Component {
    render() {
        return (
            <div id="cover" className="lateral-margin">
                <p>
                    Hey! <br/>
                    I’m Irving Mariscales, <br/>
                    a software developer with a taste for design and interactivity
                </p>

                <label id="arrow">
                    <img src={arrow} className="up"/>
                </label>
            </div>
        )
    }
}
