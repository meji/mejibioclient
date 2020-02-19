import {Control, Errors, Form} from "react-redux-form";
import React from "react";
import {required, maxLength, minLength } from '../../utils/validations';

function NewCourse(props){
    function handleSubmitCourse(values) {
        props.postCourse(values.name, values.description, values.school, values.dateInit, values.dateEnd);
        props.resetCourseForm();
    }
    return(<>
            <h2>Nuevo Curso</h2>
            <Form model="course" onSubmit={(values) => handleSubmitCourse(values)}>
                <div className="form-line">
                    <Control.text model=".name" id="name" name="name" placeholder="Name" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                            maxLength: "Must be 15 characters or less"
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.textarea model=".description" id="description" name="description" placeholder="Description" className="form-control"
                                      validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".description"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                            maxLength: "Must be 15 characters or less"
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.text model=".school" id="school" name="school" placeholder="School" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".school"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                            maxLength: "Must be 15 characters or less"
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.text model=".dateInit" id="dateInit" name="dateInit" placeholder="Date Init" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".dateInit"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                            maxLength: "Must be 15 characters or less"
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.text model=".dateEnd" id="dateEnd" name="dateEnd" placeholder="Date Init" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".dateEnd"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                            maxLength: "Must be 15 characters or less"
                        }}
                    />
                </div>
                <button type="submit">
                    Enviar Curso
                </button>
            </Form>
        </>
    )
}
export default NewCourse