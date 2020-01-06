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
                <ul id="menu-items"   className={"center links" + (this.state.menuState? " active" :"")}>
                    <li className="link">
                        <a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} href="ido"><div className="line"></div>I do</a>
                    </li>
                    <li className="link">
                        <a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} href="work"><div className="line"></div>Work</a>
                    </li>
                    <li className="link">
                        <a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} href="who"><div className="line"></div>Who</a>
                    </li>
                    <li className="contact link">
                        <a onMouseEnter={this.cursorHover} onMouseLeave={this.resetCursor} href="contact"><div className="line"></div>Contact</a>
                    </li>
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
