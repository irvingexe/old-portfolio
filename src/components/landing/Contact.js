import React, { useState, useEffect, useContext } from 'react'
import Lottie from '../Lottie'
import shineSVG from '../../assets/shine';
import Context from '../../store/context'

export default function Contact() {
    const [shining, setShining] = useState(false)
    const {state, actions} = useContext(Context);
    const mailHover = () => {cursorHover(); shine();}
    const cursorHover = () => {actions({type: 'setState', payload: {...state, cursor: {type: "hover"}}})}
    const resetCursor = () => {actions({type: 'setState', payload: {...state, cursor: {type: "default"}}})}
    const shine = () => {setShining(true)}

    useEffect(() => {
        setShining(false)
    });

    return (
        <div id="contact" className="center">
                <div>
                    <h1 className="font-m">Let's get in touch</h1>
                    <div>
                        <p className="font-s">Do you have any proposal?</p>
                        <ul>
                            <li id="mailto" className="center">
                                <div className="shine"><Lottie play={shining} animationData = {shineSVG}/></div>
                                <div className="link">
                                    <a onMouseEnter={mailHover} onMouseLeave={resetCursor} 
                                    className="font-s" href="mailto:mariscales.irving@gmail.com" target="_blank">
                                            <div className="line"></div>mariscales.irving@gmail.com
                                    </a>
                                </div>
                                <div className="shine"><Lottie play={shining} animationData = {shineSVG}/></div>
                            </li>
                            <li className="link">
                                <a onMouseEnter={cursorHover} onMouseLeave={resetCursor} className="font-s" href="https://www.linkedin.com/in/irving-mariscales/" target="_blank">
                                    <div className="line"></div>LinkedIn
                                </a>
                            </li>
                            <li className="link">
                                <a onMouseEnter={cursorHover} onMouseLeave={resetCursor} className="font-s" href="https://github.com/irvingexe" target="_blank">
                                    <div className="line"></div>GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-title font-xxl bold center unselectable"><h1>@</h1></div>
            </div>
    )
}