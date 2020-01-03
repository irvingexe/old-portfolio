import React, { Component } from 'react'
import me from '../../assets/me.svg'

export default class Who extends Component {
    render() {
        return (
            <div id="who" className="center">
                <div>
                    <h1 className="font-m">In a few words</h1>
                    <p className="font-s">
                        I like to play around with different tecnologies and 
                        I see myself every day more involved into interactivity. 
                        Simply passionated with create pixel perfect experiences.
                    </p>
                    <p className="font-s">
                        I am a software developer who enjoy creating beautiful design and good experiences.
                        I’m experienced working as a full-stack but I’m majorly involved into web developement. 
                    </p>
                </div>
                {/*<img id="cursor" alt="" src={me} className="cursor cursor-image unselectable"/>*/}
                <div className="bg-title font-xxl bold center unselectable"><h1>Who</h1></div>
            </div>
        )
    }
}
