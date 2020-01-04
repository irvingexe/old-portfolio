import React, { Component } from 'react'
import Logo from './Logo'
import '../../styles/nav.css'
import cursor from '../../cursor'

export default class Nav extends Component {

    constructor(props){
        super(props)
        this.state = {menuState: false};
    }

    menuState = () => {this.setState((state, props) => ({menuState:!state.menuState}))}
    cursorHover = () => {cursor.type = "hover"}
    resetCursor = () => {cursor.type = "default"}

    render() {
        return (
            <nav id="nav" className="fixed font-xs">
                <label htmlFor="#home" className="App-logo" onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor}>
                    <Logo/>
                    <a id="home" href="home"></a>
                </label>
                <ul id="menu-items"   className={"center" + (this.state.menuState? " active" :"")}>
                    <li><a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} href="ido">I do</a></li>
                    <li><a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} href="work">Work</a></li>
                    <li><a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} href="who">Who</a></li>
                    <li className="contact"><a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} href="contact">Contact</a></li>
                </ul>
                <label id="toggle" onClick={this.menuState} onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor}>
                    <ul className={"buns" + (this.state.menuState? " active" :"")}>
                        <li className="bun"></li>
                        <li className="bun"></li>
                    </ul>
                </label>
            </nav>
        )
    }
}
