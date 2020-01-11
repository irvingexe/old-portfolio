import React, { useContext } from 'react'
import Context from '../../store/context'
import me from '../../assets/me.svg'

export default function Cursor() {
    const {state} = useContext(Context);

    return (
        <div id="cursor" className={"center cursor-"+state.cursor.type}>
            <div></div>
            <div className="hover"></div>
            <div className="img center"><img alt="" src={me}></img></div>
            <div className="msg center font-xs">See project</div>
        </div>
    )
}
