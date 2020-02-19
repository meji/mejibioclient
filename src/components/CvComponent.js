import React from 'react';
import Courses from './CoursesComponent'
import Jobs from './JobsComponent'

function Cv(props){
    return (
        <div>
            <Courses
                courses={props.courses}
                isLoading = {props.courses.Loading}
                errMess = {props.courses.ErrMess}/>
            <Jobs
                courses={props.jobs}
                isLoading = {props.jobs.Loading}
                errMess = {props.jobs.ErrMess}/>

        </div>
    );
}

export default Cv;