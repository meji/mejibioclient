import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form'
import {Bio} from './bio';
import {Jobs} from './jobs';
import {Projects} from './projects';
import {Courses} from './courses';
import {Authenticated} from './authenticated';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialMessage, InitialCourse, InitialBio, InitialJob, InitialProject} from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bios: Bio,
            jobs: Jobs,
            projects: Projects,
            courses: Courses,
            authenticated: Authenticated,
            ...createForms({
                message: InitialMessage,
                course: InitialCourse,
                bio: InitialBio,
                project: InitialProject,
                job: InitialJob
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}