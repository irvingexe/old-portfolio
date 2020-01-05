import React, { Component } from 'react'
import cursor from '../../cursor'

export default class Cursor extends Component {
    render() {
        return (
            <div>
                <div id="cursor" className={"center cursor-"+cursor.type}>
                    <div className="center">
                        {(cursor.type === "project")? "See project" :null}
                    </div>
                </div>
                <div className="img center"><img alt="" src={cursor.image}></img></div>
            </div>
        )
    }
}
