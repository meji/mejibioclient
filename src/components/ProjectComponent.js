import React from 'react';
import {Loading} from './LoadingComponent'

function Project(props) {
  if (props.isLoading) {
    return (
      <div className="Project-view">
        <Loading/>
      </div>
    )
  } else if (props.ErrMess) {
    return (
      <h4>{props.errMess}</h4>
    )
  } else {
    return (
      <div className="project-view">
        <div id="hero">
          <div className="container">
            <h1>{props.project.name}</h1>
          </div>
          <img className="main-img" src={process.env.REACT_APP_SERVER_URL+"projects/img/"+props.project.img} alt={props.project.name} title={props.project.name}/>
        </div>
          <header>
            <div className="container">
              <div class="flex-container">
                <img className="logo-img" src={process.env.REACT_APP_SERVER_URL+"projects/img/"+props.project.logo} alt={props.project.name} title={props.project.name}/>
                <div className="data">
                  <p><strong>Position:</strong> {props.project.charge}</p>
                  <p><strong>Client:</strong> {props.project.client}</p>
                  <p><strong>Date:</strong> {props.project.date}</p>
                  <p><strong>Website:</strong> <a target="_blank" href={props.project.url} title={"Go to "+props.project.name}>{"Visitar "+props.project.name}</a></p>
                </div>
                <div className="content"><p>{props.project.description}</p></div>
              </div>
            </div>
          </header>
      </div>
    )
  }
}

export default Project
