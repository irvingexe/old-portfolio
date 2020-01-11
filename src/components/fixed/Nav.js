import React, { useContext, useState } from 'react'
import Logo from './Logo'
import '../../styles/nav.css'
import Context from '../../store/context'

export default function Nav() {

    const [menu, setMenu] = useState(false)
    const {state, actions} = useContext(Context);
    const menuState = () => {setMenu(!state.menuState)}
    const cursorHover = () => {actions({type: 'setState', payload: {...state, cursor: {type: "hover"}}})}
    const resetCursor = () => {actions({type: 'setState', payload: {...state, cursor: {type: "default"}}})}
    const closeProject = () => {actions({type: 'setState', payload: {...state, project: {isOpened: false}}})}

    return (
        <nav id="nav" className="fixed font-xs">
            <label onClick={closeProject} htmlFor="#home" className="App-logo" onMouseEnter={cursorHover} onMouseLeave={resetCursor}>
                <a id="home" href="#cover"><Logo/></a>
            </label>
            <ul id="menu-items"   className={"center links" + (menu? " active" :"")}>
                <li className="link" onClick={closeProject}>
                    <a onMouseEnter={cursorHover} onMouseLeave={resetCursor} href="#ido"><div className="line"></div>I do</a>
                </li>
                <li className="link" onClick={closeProject}>
                    <a onMouseEnter={cursorHover} onMouseLeave={resetCursor} href="#work"><div className="line"></div>Work</a>
                </li>
                <li className="link" onClick={closeProject}>
                    <a onMouseEnter={cursorHover} onMouseLeave={resetCursor} href="#who"><div className="line"></div>Who</a>
                </li>
                <li className="contact link" onClick={closeProject}>
                    <a onMouseEnter={cursorHover} onMouseLeave={resetCursor} href="#contact"><div className="line"></div>Contact</a>
                </li>
            </ul>
            <label id="toggle" onClick={menuState} onMouseEnter={cursorHover} onMouseLeave={resetCursor}>
                <ul className={"buns" + (state.menuState? " active" :"")}>
                    <li className="bun"></li>
                    <li className="bun"></li>
                </ul>
            </label>
        </nav>
    )
}
