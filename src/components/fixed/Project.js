import React, { useContext, useState } from 'react'
import "../../styles/project.css"
import Context from '../../store/context'
import github from '../../assets/github.svg'
import mockup from '../../assets/mockup.png'

export default function Project() {
    const {state} = useContext(Context);

    return (
        <div id="project">
            <div></div>
            <div className="modal" style={{top: (state.project.isOpened? 0 : "100vh")}}>
                <div class="modal-scroll" style={{top: (state.project.isOpened? 0 : "100vh")}}>
                    <div class="modal-content">
                        <div className="center">
                            <label className="btn-repo center">
                                <img alt="" src={github}/>
                                Source code
                            </label>
                        </div>

                        <div className="font-xs role">UI design • App developement</div>

                        <h1 className="font-m">Wearify</h1>
                        <h2 className="font-xs">An app that helps you choose the right outfit</h2>
                        <div className="description">
                            <p className="font-s">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nunc laoreet, viverra nunc vel, condimentum metus. Suspendisse maximus nisl tortor, non tincidunt massa tincidunt id. Vivamus ut urna metus. Mauris ultricies sapien non massa egestas lacinia. 
                            </p>
                            <div className="font-xs">
                                <h2 className="font-xs">Tecnologies</h2>
                                <ul>
                                    <li>Fnsetur</li>
                                    <li>Consectetur</li>
                                    <li>Tetur huu</li>
                                    <li>Bonsectur</li>
                                </ul>
                            </div>
                        </div>
                        <div className="center img"><img alt="" src={mockup}/></div>
                        <div className="screens" style={{background: "#EED3D3"}}>
                            <section>
                                <div className="center">
                                    <img alt="" src={mockup}/>
                                    <p className="font-s center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nunc laoreet, viverra nunc vel, condimentum metus. Suspendisse maximus nisl tortor, non tincidunt massa tincidunt id.
                                    </p>
                                </div>
                                <div className="center reverse">
                                    <p className="font-s center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nunc laoreet, viverra nunc vel, condimentum metus. Suspendisse maximus nisl tortor, non tincidunt massa tincidunt id.
                                    </p>
                                    <img alt="" src={mockup}/>
                                </div>
                                <div className="center three">
                                    <img alt="" src={mockup}/>
                                    <img alt="" src={mockup}/>
                                    <img alt="" src={mockup}/>
                                </div>
                                <div className="center">
                                    <img alt="" src={mockup}/>
                                </div>
                            </section> 
                            <label className="center">
                                <img className="unselectable" alt="" src={mockup}/>
                                <h1 className="font-m center">Wearify</h1>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
