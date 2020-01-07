import React, {Component} from 'react';
import Lottie from '../Lottie';
import smile from '../../assets/smile';

export default class Logo extends Component{

    constructor(props){
        super(props);
        this.state = {isHover: null, reverse: false, playFromCurrent: true};
    }

    onMouseEnter = () => { this.setState((state, props) => ({isHover: true, playFromCurrent: true}),
                    () => { this.setState((state, props) => ({playFromCurrent: false})) }) }
    onMouseLeave = () => { this.setState((state, props) => ({isHover: false, playFromCurrent: true}),
                    () => { this.setState((state, props) => ({playFromCurrent: false})) }) }
    onClick = () => { 
        this.setState((state, props) => ({reverse: true, playFromCurrent: false}),
        () => setTimeout(function() {this.setState({reverse: false})}.bind(this), 500)) 
    }

    render(){
        return(
            <label className="unselectable" onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className = "smile">
                    <Lottie
                        animationData = {smile}
                        playFromCurrent = {this.state.playFromCurrent? this.state.isHover :null}
                    />
                </div>
                <div id="logo-text">
                    <svg viewBox="0 0 500 500" className = {("text " + (this.state.reverse? " text-reverse" :""))}>
                        <path id="curve" fill="transparent" d="M0,246.9c0,125.5,90.1,253.6,250,253.6c127.8,0,250-104.7,250-250C500,79.4,353,0,249.9,0C128,0,0,99.8,0,246.9"/>
                        <text fill="#000000">
                            <textPath xlinkHref="#curve">
                            IRVING MARISCALES
                            </textPath>
                        </text>
                    </svg>
                </div>
            </label>
        )
    }
}