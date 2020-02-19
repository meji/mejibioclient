import React from 'react';

function Job({job}) {
    return(
        <div className="course">
            <h2>{job.name}</h2>
            <p>{job.place}</p>
            <p>{job.description}</p>
            <p>Desde {job.dateInit} hasta {job.dateEnd}</p>
        </div>
    )
}

function Jobs(props){
    const courses = props.courses.map((job) =>{
        return <Job job={job} key={job._id} />
    });
    return(
        <div>
            <h2>Jobs</h2>
            <ul>
                {courses}
            </ul>
        </div>
    )
}

export default Jobs;