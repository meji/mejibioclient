import React, {Component} from 'react';
import {Control,  Errors, Form} from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name;
        this.setState({
            [name] : value,
        })
    }
    handleSubmit(values){
        this.props.postMessage(values.firstname, values.lastname, values.telnum, values.email, values.message, values.subject);
        this.props.resetMessageForm();
    }
    render(){
        return(
            <div>
                <h3>Send us your Message</h3>
                <Form model="message" onSubmit={(values) => this.handleSubmit(values)}>
                    <div className="form-line">
                        <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control"
                                              validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                        />
                        <Errors
                            className="text-danger"
                            model=".firstname"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: "Must be greater than 2 characters",
                                maxLength: "Must be 15 characters or less"
                            }}
                        />
                    </div>
                    <div className="form-line">
                        <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                        />
                        <Errors
                            className="text-danger"
                            model=".lastname"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: "Must be greater than 2 characters",
                                maxLength: "Must be 15 characters or less"
                            }}
                        />
                    </div>
                    <div className="form-line">
                        <Control.text model=".subject" id="subject" name="subject" placeholder="Subject" className="form-control"
                                      validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                        />
                        <Errors
                            className="text-danger"
                            model=".subject"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: "Must be greater than 2 characters",
                                maxLength: "Must be 15 characters or less"
                            }}
                        />
                    </div>
                    <div className="form-line">
                        <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Tel. Number" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15), isNumber}}
                        />
                        <Errors
                            className="text-danger"
                            model=".telnum"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: "Must be greater than 2 numbers",
                                maxLength: "Must be 15 numbers or less",
                                isNumber : "Must be a number"
                            }}
                        />
                    </div>
                    <div className="form-line">
                        <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control"
                                  validators={{required, validEmail}}
                        />
                        <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid Email Address'
                            }}
                        />
                    </div>
                    <div className="form-line">
                        <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control"/>
                    </div>
                    <button type="submit">
                        Send Message
                    </button>
                </Form>
            </div>

        );
    }
}

export default Contact;