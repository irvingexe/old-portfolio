import React, { Component } from 'react'
import Lottie from '../Lottie'
import shine from '../../assets/shine';
import cursor from '../../cursor'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {shine: false}
    }
    mailHover = () => {this.cursorHover(); this.shine();}
    cursorHover = () => {cursor.type = "hover"}
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
                            <div className="link">
                                <a onMouseEnter={this.mailHover} onMouseLeave={this.resetCursor} 
                                className="font-s" href="mailto:mariscales.irving@gmail.com">
                                        <div className="line"></div>mariscales.irving@gmail.com
                                </a>
                            </div>
                            <div className="shine"><Lottie play={this.state.shine} animationData = {shine}/></div>
                        </li>
                        <li className="link">
                            <a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} className="font-s" href="https://www.linkedin.com/in/irving-mariscales/">
                                <div className="line"></div>LinkedIn
                            </a>
                        </li>
                        <li className="link">
                            <a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} className="font-s" href="https://github.com/irvingexe">
                                <div className="line"></div>GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bg-title font-xxl bold center unselectable"><h1>@</h1></div>
            </div>
        )
    }
}
