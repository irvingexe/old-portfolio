import React, { useContext } from 'react'
import '../../styles/landing.css'
import arrow from '../../assets/arrow.svg'
import Context from '../../store/context'

export default function Cover() {
    const {state, actions} = useContext(Context);
    const cursorHover = () => {actions({type: 'setState', payload: {...state, cursor: {type: "hover"}}})}
    const resetCursor = () => {actions({type: 'setState', payload: {...state, cursor: {type: "default"}}})}
    return (
        <div id="cover">
                <div>
                    <p className="center">
                        Hey! <br/>
                        I’m Irving Mariscales, <br/>
                        a software developer with a taste for design and interactivity
                    </p>

                    <label id="arrow" className="center" onMouseEnter={cursorHover} onMouseLeave={resetCursor}>
                        <img alt="" src={arrow} className="up"/>
                    </label>
                </div>
            </div>
    )
}