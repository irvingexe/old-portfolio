import React, { Component } from 'react'
import '../../styles/landing.css'
import arrow from '../../assets/arrow.svg'
import cursor from '../../cursor'

export default class Cover extends Component {
    cursorHover = () => {cursor.type = "hover"}
    resetCursor = () => {cursor.type = "default"}
    render() {
        return (
            <div id="cover">
                <div>
                    <p className="center">
                        Hey! <br/>
                        I’m Irving Mariscales, <br/>
                        a software developer with a taste for design and interactivity
                    </p>

                    <label id="arrow" className="center" onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor}>
                        <img alt="" src={arrow} className="up"/>
                    </label>
                </div>
            </div>
        )
    }
}
