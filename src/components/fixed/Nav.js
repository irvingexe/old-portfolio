import React, { Component } from 'react'
import Logo from './Logo'
import '../../styles/nav.css'

export default class Nav extends Component {

    constructor(props){
        super(props)
        this.state = {menuState: false};
    }

    menuState = () => {this.setState((state, props) => ({menuState:!state.menuState}))}

    render() {
        return (
            <nav id="nav" className="fixed font-xs">
                <label className="App-logo">
                    <Logo/>
                </label>
                <ul id="menu-items"   className={"center" + (this.state.menuState? " active" :"")}>
                    <li><a href="#">I do</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Who</a></li>
                    <li id="contact"><a href="#">Contact</a></li>
                </ul>
                <label id="toggle" onClick={this.menuState}>
                    <ul className={"buns" + (this.state.menuState? " active" :"")}>
                        <li className="bun"></li>
                        <li className="bun"></li>
                    </ul>
                </label>
            </nav>
        )
    }
}
