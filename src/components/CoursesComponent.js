import React from 'react';

function Course({course}) {
    return(
        <div className="course">
            <h2>{course.name}</h2>
            <p>{course.school}</p>
            <p>{course.description}</p>
            <p>Desde {course.dateInit} hasta {course.dateEnd}</p>
        </div>
    )
}

function Courses(props){
    const courses = props.courses.map((course) =>{
        return <Course course={course} key={course._id} />
    });



    return(
        <div>
            <h2>Courses</h2>
            <ul>
                {courses}
            </ul>
        </div>
    )
}

export default Courses;