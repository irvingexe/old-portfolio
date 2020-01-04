import React, { Component } from 'react'
import cursor from '../../cursor'

export default class Cursor extends Component {
    render() {
        return (
            <div id="cursor">
                <div className={"center "+cursor.type}>
                    {(cursor.type === "project")? "See project" :null}
                </div>
            </div>
        )
    }
}
