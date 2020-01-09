import React, { Component } from 'react'
import mockup from '../../assets/mockup.svg'
import cursor from '../../cursor'

export default class Work extends Component {
    cursorProject = () => {cursor.type = "project"}
    resetCursor = () => {cursor.type = "default"}
    render() {
        return (
            <div id="work">
                <div className="center scrollOut">
                    <h1 className="title font-xl">La guarida</h1>
                    <h1 className="title font-xl">del sushi</h1>
                    <div className="mockup" onMouseEnter={this.cursorProject} onMouseLeave={this.resetCursor}>
                        <img alt="" src={mockup}></img>
                    </div>
                </div>
                <div className="center scrollOut">
                    <h1 className="title font-xl">Tlaloc</h1>
                    <h1 className="title font-xl"></h1>
                    <div className="mockup" onMouseEnter={this.cursorProject} onMouseLeave={this.resetCursor}>
                        <img alt="" src={mockup}></img>
                    </div>
                </div>
                <div className="bg-title font-xxl bold center unselectable"><h1>Work</h1></div>
            </div>
        )
    }
}
