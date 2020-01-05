import React, { Component } from 'react'
import Lottie from '../Lottie'
import shine from '../../assets/smile';
import cursor from '../../cursor'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {shine: false}
    }
    cursorHover = () => {cursor.type = "hover"; this.shine()}
    resetCursor = () => {cursor.type = "default"}
    shine = () => {this.setState((state, props) => ({shine: true}), () => {this.setState((state, props) => ({shine: false}))})}
    render() {
        return (
            <div id="contact" className="center">
                <div>
                    <h1 className="font-m">Let's make something great</h1>
                    <p className="font-s">Do you have any proposal?</p>
                    <ul>
                        <li id="mailto" className="center">
                            <div className="shine"><Lottie play={this.state.shine} animationData = {shine}/></div>
                            <a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} className="font-s" href="mailto:mariscales.irving@gmail.com">mariscales.irving@gmail.com</a>
                            <div className="shine"><Lottie play={this.state.shine} animationData = {shine}/></div>
                        </li>
                        <li><a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} className="font-s" href="https://www.linkedin.com/in/irving-mariscales/">LinkedIn</a></li>
                        <li><a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} className="font-s" href="https://github.com/irvingexe">GitHub</a></li>
                    </ul>
                </div>
                <div className="bg-title font-xxl bold center unselectable"><h1>@</h1></div>
            </div>
        )
    }
}
