import React, { useEffect } from 'react'
import queryString from 'query-string';
import  NewBio from './adminForms/NewBio'
import  NewJob from './adminForms/NewJob'
import  NewCourse from './adminForms/NewCourse'
import  NewProject from './adminForms/NewProject'
import addBodyClassName from '../utils/addBodyClassName'

function Admin(props){
  addBodyClassName('admin');
  useEffect(()=> {
        const query = queryString.parse(props.location.location.search);
        if (query.token) {
          window.localStorage.setItem("jwt", query.token);
          window.location.href = '/admin/';
        }
      }
    )
   function logout(){
        window.localStorage.clear();
        window.location.href='/admin/';
    }

      if (props.authenticated === true) {
          return (
              <>
                  <h1> Autenticado</h1>
                  <NewBio
                      postBio={props.postBio}
                      resetBioForm={props.resetBioForm}/>
                  <NewCourse
                      postCourse={props.postCourse}
                      resetCourseForm={props.resetCourseForm}
                  />
                  <NewJob
                      postJob={props.postJob}
                      resetJobForm={props.resetJobForm}
                  />
                  <NewProject
                      postProject={props.postProject}
                      resetProjectForm={props.resetProjectForm}
                      postImgProject={props.postImgProject}
                  />
                  <button onClick={logout}>Logout</button>
              </>
          )
      }
      return (
          <>
              <h1>Admin Page</h1>
              <p>Debes estar logueado para acceder a esta página</p>
              <a className="btn" href={process.env.REACT_APP_SERVER_URL+"auth/google"}>Login Google</a>
          </>
      )
}


export default Admin;
