import React, { Component } from 'react'
import '../styles/background.css'
import doodle from '../../assets/doodle.svg'

export default class Background extends Component {
    render() {
        return (
            <div id="background">
                <img src={doodle} id="doodle"/>
            </div>
        )
    }
}
