import React, { useContext, useState } from 'react'
import "../../styles/project.css"
import Context from '../../store/context'
import useMousePosition from '../../useMousePosition'

export default function Project() {
    const {state, actions} = useContext(Context);
    const position = useMousePosition();

    return (
        <div id="project">
            <div></div>
            <div className="modal" style={{clipPath: "circle("+(state.project.isOpened? 100 :0)+"% at "+ 
                (!state.project.isOpened? (position.x + "px " + position.y + "px") :"50% 50%")+")"}}></div>
        </div>
    )
}
