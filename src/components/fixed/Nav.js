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
                <label htmlFor="#home" className="App-logo">
                    <Logo/>
                    <a id="home" href="home"></a>
                </label>
                <ul id="menu-items"   className={"center" + (this.state.menuState? " active" :"")}>
                    <li><a href="ido">I do</a></li>
                    <li><a href="work">Work</a></li>
                    <li><a href="who">Who</a></li>
                    <li className="contact"><a href="contact">Contact</a></li>
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
