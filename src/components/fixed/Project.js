import React, { Component } from 'react'
import "../../styles/project.css"

export default class Project extends Component {
    constructor(props){
        super(props);
        this.state = {clipPathSize:10, x:0, y:0};
    }
    render() {
        return (
            <div id="project">
                <div></div>
                <div className="modal" 
                    style={{clipPath: "circle("+this.state.clipPathSize+"% at "+
                                                this.state.x+"% "+this.state.y+"%)"}}></div>
            </div>
        )
    }
}