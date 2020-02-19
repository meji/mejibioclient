import React from 'react';
import Projects from "./ProjectsComponent";
import {Loading} from './LoadingComponent'
import  {scrollAnchors, animatione} from '../utils/tools'
import addBodyClassName from '../utils/addBodyClassName'
import {Fade, Stagger} from 'react-animation-components'

function Hero ({bios, isLoading, errMess}) {
    if(isLoading){
            return(
                  <Loading/>
            );
        }
        else if(errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    return(
        <section id="hero" className="v-align t-center screen-height dark-bg ">
            <div className="container">
                <h1 className="font-secondary"   onClick={animatione}><span className="split">
                    <span className="letters meji"> Meji <small>&</small></span>
                    <span className="letters letters-1">The Heart</span>
                  <span className="letters letters-2">is always</span>
                  <span className="letters letters-3">the way</span>
                </span></h1>
                <h2 className="position">{bios.position}</h2>
                <h3 className="claim scroll" data-href="#bio" onClick={e => scrollAnchors(e) }>{bios.claim}</h3>
            </div>
        </section>
    )
}
function Bios ({bios, isLoading, errMess}) {
    if(isLoading){
        return(
            <Loading/>
        );
    }
    else if(errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    return(
        <section id="bio" className="v-align t-center screen-height">
            <div className="container">
                <div className="v-center">
                    <img className="avatar" src="/img/avatar.png" alt={bios.name} title={bios.name}/>
                    <p className="bio">{bios.biotext}</p>
                    <div id="skills">
                        <p>Designed & developed with Figma &</p>
                        <ul className="no-style">
                            <li><a href="https://developer.mozilla.org/es/docs/HTML/HTML5" title="Go to Html5 doc" target="_blank" rel="noopener noreferrer">HTML5</a></li>
                            <li><a href="https://es.reactjs.org/" title="Go to REACT doc" target="_blank" rel="noopener noreferrer">REACT</a></li>
                            <li><a href="https://es.redux.js.org/" title="Go to REDUX doc" target="_blank" rel="noopener noreferrer">REDUX</a></li>
                            <li><a href="https://redux-form.com/8.3.0/" title="Go to REDUX-FORMS doc"target="_blank" rel="noopener noreferrer" >REDUX-FORMS</a></li>
                            <li><a href="https://expressjs.com/es/" title="Go to EXPRESS doc" target="_blank" rel="noopener noreferrer">EXPRESS</a></li>
                            <li><a href="https://www.mongodb.com/" title="Go to MONGODB doc"target="_blank" rel="noopener noreferrer" >MONGODB</a></li>
                            <li><a href="http://www.passportjs.org/" title="Go to PASSPORT JWT doc"target="_blank" rel="noopener noreferrer" >PASSPORT JWT</a></li>
                            <li><a href="https://postcss.org/" title="Go to POSTCSS doc" target="_blank" rel="noopener noreferrer">POSTCSS</a></li>
                            <li><a href="https://animejs.com/" title="Go to ANIME.JS doc" target="_blank" rel="noopener noreferrer">ANIMEJS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default function  Home(props) {
    addBodyClassName('home');
    return (
        <div class="home">
            <Hero
                bios={props.bios}
                isLoading = {props.bioLoading}
                errMess = {props.bioErrMess}/>
            <Bios
                bios={props.bios}
                isLoading = {props.bioLoading}
                errMess = {props.bioErrMess}
            />
            <Projects
                projects={props.projects}
                isLoading = {props.projectsLoading}
                errMess = {props.projectsErrMess}/>
            {/*<Contact*/}
            {/*    postMessage= {props.postMessage}*/}
            {/*    resetMessageForm={props.resetMessageForm}*/}
            {/*     />*/}
        </div>
    );
}


