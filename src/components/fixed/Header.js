import React, { Component } from 'react'
import Logo from './Logo'
import '../styles/header.css'

export default class Header extends Component {
    render() {
        return (
            <div id="header" className="fixed font-xs">
                <label className="App-logo">
                    <Logo/>
                </label>
                <ul className="center">
                    <li><a href="#">I do</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Who</a></li>
                    <li id="contact"><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    }
}
