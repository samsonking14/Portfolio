import React from 'react'
import "./services.scss";
import world1 from '/star.mp4';
import html from '/html.png'
import css from '/css.png'
import js from '/js.png'
import vR from '/viteReact.svg'
import Reactjs from '/react.png'
import Redux from '/redux.png'
import frame from '/framer.png'
import figma from '/figma.png'
import git from '/gitwhite.png'
import node from '/node-js.png'
import exp from '/express.png'
import mongo from '/mongodb.png'
import fire from '/Firebase.png'
import sql from '/mysql.png'
const Service = () => {
    return (
        <div className='Service'>
            <div className="wrapper">
                <video autoPlay muted loop className="serv-vid">
                    <source src={world1} type="video/mp4" />
                </video>
            </div>
            <div className="skills">
            <img src={html} alt="skill" />
            <img src={css} alt="skill" />
            <img src={js} alt="skill" />
            <img src={vR} alt="skill" />
            <img src={Reactjs} alt="skill" />
            <img src={Redux} alt="skill" />
            <img src={frame} alt="skill" />
            <img src={figma} alt="skill" />
            <img src={git} alt="skill" />
            </div>
            <div className="skills1">
            <img src={node} alt="skill" />
            <img src={exp} alt="skill" />
            <img src={mongo} alt="skill" />
            <img src={sql} alt="skill" />
            <img src={fire} alt="skill" />
            </div>
        </div>
    )
}

export default Service