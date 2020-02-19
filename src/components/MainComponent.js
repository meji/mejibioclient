import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Project from './ProjectComponent';
import Projects from './ProjectsComponent';
import Admin from './AdminComponent'
import Cv from './CvComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchBio, fetchJobs, fetchProjects, fetchCourses, postMessage, isAuthenticated, postCourse, postBio, postProject, postJob, postImgProject} from '../redux/ActionCreators'
import {actions} from 'react-redux-form'
import{TransitionGroup, CSSTransition} from 'react-transition-group'

const mapStateToProps = state =>{
    return {
        bios : state.bios,
        jobs: state.jobs,
        projects : state.projects,
        courses : state.courses,
        authenticated : state.authenticated,
    }
}


const mapDispatchtoProps = (dispatch) => ({
    postMessage: (firstname, lastname, telnum, email, messagetext, subject) => {dispatch(postMessage(firstname, lastname, telnum, email,messagetext, subject))},
    resetMessageForm: () => {dispatch(actions.reset('message'))},
    fetchBio: () =>{dispatch(fetchBio())},
    fetchJobs: () =>{dispatch(fetchJobs())},
    fetchProjects: () =>{dispatch(fetchProjects())},
    fetchCourses: () =>{dispatch(fetchCourses())},
    isAuthenticated: ()=>{dispatch(isAuthenticated())},
    postBio: (position, claim, biotext) => {dispatch(postBio(position, claim, biotext))},
    resetBioForm: () => {dispatch(actions.reset('bio'))},
    postCourse: (name, description, school, dateInit, dateEnd) => {dispatch(postCourse(name, description, school, dateInit, dateEnd))},
    resetCourseForm: () => {dispatch(actions.reset('course'))},
    postJob: (name, description, company, dateInit, dateEnd) => {dispatch(postJob(name, description, company, dateInit, dateEnd))},
    resetJobForm: () => {dispatch(actions.reset('job'))},
    postProject: (name,  charge, client, date,  description, img, token, url) => {dispatch(postProject(name,  charge, client, date,  description, img, token, url))},
    postImgProject: (img, logo, token, name) => {dispatch(postImgProject(img, logo, token, name))},
    resetProjectForm: () => {dispatch(actions.reset('project'))}
})




class Main extends Component{

    componentDidMount() {
        this.props.fetchBio();
        this.props.fetchJobs();
        this.props.fetchProjects();
        this.props.fetchCourses();
        this.props.isAuthenticated();
    }

    render() {
        const ProjectWithName = ({match}) =>{
            return(
              <Project project = {this.props.projects.projects.filter((project)=> project.name === match.params.projectName)[0]}
                       isLoading = {this.props.projects.isLoading}
                       errMess = {this.props.projects.errMess}
              />
            )
        }
        return(
            <div>
                <Header/>
                <main>
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch>
                                <Route exact path="/" component={()=> <Home
                                    bios={this.props.bios.bios}
                                    bioLoading={this.props.bios.isLoading}
                                    bioErrMess={this.props.bios.errMess}
                                    projects={this.props.projects.projects.filter(project => project.featured === true)}
                                    projectsLoading={this.props.projects.isLoading}
                                    projectsErrMess={this.props.projects.errMess}
                                    postMessage= {this.props.postMessage}
                                    resetMessageForm={this.props.resetMessageForm}
                                    />}/>
                                />}/>
                                <Route exact path="/cv" component={()=><Cv
                                    projects={this.props.projects.projects.filter(project => project.featured === true)}
                                    projectsLoading={this.props.projects.isLoading}
                                    projectsErrMess={this.props.projects.errMess}
                                    courses={this.props.courses.courses}
                                    coursesLoading={this.props.courses.isLoading}
                                    coursesErrMess={this.props.courses.errMess}
                                    jobs={this.props.jobs.jobs}
                                    jobsLoading={this.props.jobs.isLoading}
                                    jobsErrMess={this.props.projects.errMess}
                                />}/>
                                <Route exact path="/projects" component={()=> <Projects
                                    projects={this.props.projects.projects}
                                    projectsLoading={this.props.projects.isLoading}
                                    projectsErrMess={this.props.projects.errMess}
                                />}/>
                                <Route exact path="/projects/:projectName" component={ProjectWithName}/>
                                <Route exact path="/admin" component={()=><Admin
                                    authenticated={this.props.authenticated.authenticated}
                                    location={this.props.history}
                                    postBio={this.props.postBio}
                                    resetBioForm={this.props.resetBioForm}
                                    postCourse={this.props.postCourse}
                                    resetCourseForm={this.props.resetCourseForm}
                                    postJob={this.props.postJob}
                                    resetJobForm={this.props.resetJobForm}
                                    postProject={this.props.postProject}
                                    resetProjectForm={this.props.resetProjectForm}
                                    postImgProject={this.props.postImgProject}
                                />}/>
                                <Redirect to="/"/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </main>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Main));
