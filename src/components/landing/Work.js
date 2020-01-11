import React, { useContext } from 'react'
import mockup from '../../assets/mockup.svg'
import Context from '../../store/context'

export default function Work() {
    const {state, actions} = useContext(Context);

    const cursorProject = () => {actions({type: 'setState', payload: {...state, cursor: {type: "project"}}})}
    const resetCursor = () => {actions({type: 'setState', payload: {...state, cursor: {type: "default"}}})}
    const open = () => {actions({type: 'setState', payload: {...state, project: {isOpened: true}}})}

    return (
        <div id="work">
            <div className="center scrollOut">
                <h1 className="title font-xl">La guarida</h1>
                <h1 className="title font-xl">del sushi</h1>
                <div onClick={open} className="mockup center unselectable" onMouseEnter={cursorProject} onMouseLeave={resetCursor}>
                    <img alt="" src={mockup}></img>
                </div>
            </div>
            <div className="center scrollOut">
                <h1 className="title font-xl">Tlaloc</h1>
                <h1 className="title font-xl"></h1>
                <div onClick={open} className="mockup center unselectable" onMouseEnter={cursorProject} onMouseLeave={resetCursor}>
                    <img alt="" src={mockup}></img>
                </div>
            </div>
            <div className="bg-title font-xxl bold center unselectable"><h1>Work</h1></div>
        </div>
    )
}
