import React, { Component } from 'react'
import cursor from '../../cursor'

export default class Cursor extends Component {
    render() {
        return (
            <div>
                <div id="cursor" className={"center cursor-"+cursor.type}>
                    <div className="center">
                        
                    </div>
                </div>
                <div className="img center"><img alt="" src={cursor.image}></img></div>
                <div className="msg center font-xs">See project</div>
            </div>
        )
    }
}
