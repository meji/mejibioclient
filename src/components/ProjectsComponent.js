import React  from 'react';
import {Loading} from "./LoadingComponent";
import  {linkContainer} from '../utils/tools'

function Project({project}){

    return (
        <li className="featured-project" onClick={e=> linkContainer(e)}>
          <h2 data-href={"/projects/"+project.name}>{project.name}</h2>
            <img className="logo-img" src={process.env.REACT_APP_SERVER_URL+"projects/img/"+project.logo} alt={project.name} title={project.name}/>
            <img className="main-img" src={process.env.REACT_APP_SERVER_URL+"projects/img/"+project.img} alt={project.name} title={project.name}/>
        </li>
    )
}

function Projects(props) {
    const projects = props.projects.map((project)=> {
            return (<Project project={project} key={project._id}/>)
    });
    if(props.projectsLoading){
        return(
            <section id="Projects" className="v-align t-center screen-height">
                <div>
                    <Loading/>
                </div>
            </section>
        );
    }
    else if(props.projectsErrMess) {
        return (
            <h4>{props.projectsErrMess}</h4>
        )
    }
    return(
        <section id="projects" className="v-align t-center screen-height">
            <div>
                <h2>Last Projects</h2>
                <ul className="no-style">
                    {projects}
                </ul>
            </div>
        </section>
    )
}
export default Projects

