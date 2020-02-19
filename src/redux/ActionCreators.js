import * as ActionTypes from './ActionTypes';

export const fetchBio = () => (dispatch) => {
    dispatch(bioLoading(true));
    return fetch(process.env.REACT_APP_SERVER_URL+'bio')
        .then(response =>{
                if(response){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then(response => dispatch(addBio(response.data[0])))
        .catch(error=> dispatch(bioFailed(error.message)));
}

export const bioLoading = () => ({
    type: ActionTypes.BIO_LOADING
});

export const bioFailed = (errmess) => ({
    type: ActionTypes.BIO_FAILED,
    payload: errmess
})

export const addBio = (bios) => ({
    type: ActionTypes.ADD_BIO,
    payload: bios
})
export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));
    return fetch(process.env.REACT_APP_SERVER_URL + 'projects')
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then(response => dispatch(addProjects(response.data)))
        .catch(error=> dispatch(projectsFailed(error.message)));
}

export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = (errmess) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errmess
})

export const addProjects = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
})

export const fetchJobs = () => (dispatch) => {
    dispatch(jobsLoading(true));
    return fetch(process.env.REACT_APP_SERVER_URL + 'jobs')
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then(response => dispatch(addJobs(response.data)))
        .catch(error=> dispatch(jobsFailed(error.message)));
}

export const jobsLoading = () => ({
    type: ActionTypes.JOBS_LOADING
});

export const jobsFailed = (errmess) => ({
    type: ActionTypes.JOBS_FAILED,
    payload: errmess
})

export const addJobs = (jobs) => ({
    type: ActionTypes.ADD_JOBS,
    payload: jobs
})
export const fetchCourses = () => (dispatch) => {
    dispatch(coursesLoading(true));
    return fetch(process.env.REACT_APP_SERVER_URL + 'courses')
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then((response)=> dispatch(addCourses(response.data)))
        .catch(error=> dispatch(coursesFailed(error.message)));
}

export const coursesLoading = () => ({
    type: ActionTypes.COURSES_LOADING
});

export const coursesFailed = (errmess) => ({
    type: ActionTypes.COURSES_FAILED,
    payload: errmess
})

export const addCourses = (courses) => ({
    type: ActionTypes.ADD_COURSES,
    payload: courses
})


export const addMessage = (message) => ({
    type: ActionTypes.ADD_MESSAGE,
    payload: message
})


export const postMessage= (firstname, lastname, telnum, email, messagetext, subject) => (dispatch) => {
    const newMessage = {
        firstname:firstname,
        lastname: lastname,
        telnum: telnum,
        email:email,
        messagetext: messagetext,
        subject: subject
    }
    newMessage.date = new Date().toISOString();

    return fetch(process.env.REACT_APP_SERVER_URL + 'messages/new', {
        method: 'POST',
        body: JSON.stringify(newMessage),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error
            })
        .then(response =>dispatch(addMessage(response)))
        .catch(error => {
            console.log('Post messages:'+ error.message)
            alert('your messages could not be posted\nError:' + error.message)
        })

}

export const addAuthentication = (authenticated) => ({
    type: ActionTypes.ADD_AUTHENTICATION,
    payload: authenticated
})
export const authenticationFailed = (errmess) => ({
    type: ActionTypes.AUTHENTICATION_FAILED,
    payload: errmess
})

export const isAuthenticated = () => (dispatch) => {
    const token = localStorage.getItem('jwt');
    return fetch(process.env.REACT_APP_SERVER_URL + 'admin?token='+token).then(response =>{
            if(response.ok){
                return response
            }else{
                var error = new Error('Error '+response.status + ': '+ response.statusText)
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess
        })
        .then(response => response.json())
        .then((response)=> dispatch(addAuthentication(response.data)))
        .catch(error => {
            console.log('Authenticacion:'+ error.message)
            dispatch(authenticationFailed(error.message))
        })
}




export const postBio= (position, claim, biotext) => (dispatch) => {
    const newBio = {
        position: position,
        claim: claim,
        biotext: biotext
    }
    console.log("El Bio que se envia es: "+JSON.stringify(newBio))
    return fetch(process.env.REACT_APP_SERVER_URL + 'bio/new', {
        method: 'POST',
        body: JSON.stringify(newBio),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error
            })
        .then(response=>response.json())
        .then(response =>dispatch(addNBio(response)))
        .catch(error => {
            console.log('Post messages:'+ error.message)
            alert('your Bio could not be posted\nError:' + error.message)
        })

}
export const addNBio = (bio) => ({
    type: ActionTypes.ADD_NBIO,
    payload: bio
})

export const postCourse= (name, description, school, dateInit, dateEnd) => (dispatch) => {
    const newCourse = {
        name: name,
        description: description,
        school: school,
        dateInit: dateInit,
        dateEnd: dateEnd
    }
    console.log("El curso que se envia es: "+newCourse)
    return fetch(process.env.REACT_APP_SERVER_URL + 'courses/new', {
        method: 'POST',
        body: JSON.stringify(newCourse),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error
            })
        .then(response=>response.json())
        .then(response =>dispatch(addCourse(response)))
        .catch(error => {
            console.log('Post messages:'+ error.message)
            alert('your course could not be posted\nError:' + error.message)
        })

}
export const addCourse = (course) => ({
    type: ActionTypes.ADD_COURSE,
    payload: course
})

export const postJob= (name, description, company, dateInit, dateEnd) => (dispatch) => {
    const newJob = {
        name: name,
        description: description,
        company: company,
        dateInit: dateInit,
        dateEnd: dateEnd
    }
    console.log("El curso que se envia es: "+newJob)
    return fetch(process.env.REACT_APP_SERVER_URL + 'jobs/new', {
        method: 'POST',
        body: JSON.stringify(newJob),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error
            })
        .then(response =>dispatch(addJob(response)))
        .catch(error => {
            console.log('Post messages:'+ error.message)
            alert('your job could not be posted\nError:' + error.message)
        })

}
export const addJob = (job) => ({
    type: ActionTypes.ADD_JOB,
    payload: job
})


export const postProject= (name, charge, client, date,  description,  token, url) => (dispatch) => {
    const newProject = {
        name: name,
        charge: charge,
        client: client,
        date: date,
        description: description,
        url: url
    }
    console.log("El curso que se envia es: "+newProject)
    return fetch(process.env.REACT_APP_SERVER_URL + 'projects/new?token='+token, {
        method: 'POST',
        body: JSON.stringify(newProject),
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error
            })
        .then(response=>response.json())
        .then(response =>dispatch(addProject(response)))
        .catch(error => {
            console.log('Post messages:'+ error.message)
            alert('your job could not be posted\nError:' + error.message)
        })

}
export const addProject = (project) => ({
    type: ActionTypes.ADD_PROJECT,
    payload: project
})

export const postImgProject= (img, logo, token, name) => (dispatch) => {
    const formData = new FormData();
    formData.append('image', img[0]);
    formData.append('logo', logo[0])
    return fetch(process.env.REACT_APP_SERVER_URL + `/projects/newimg/?name=${name}&token=${token}`, {
        method: 'POST',
        body: formData
    })
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error
            })
        .then(response=>response.json())
        .then(response =>dispatch(addProjectImg(response)))
        .catch(error => {
            console.log('Post messages:'+ error.message)
            alert('your job could not be posted\nError:' + error.message)
        })

}

export const addProjectImg = (img) => ({
    type: ActionTypes.ADD_IMGPROJECT,
    payload: img
})