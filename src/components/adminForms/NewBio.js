import {Control, Form} from "react-redux-form";
import React from "react";

function NewBio(props){
    function   handleSubmitBio(values) {
        props.postBio(values.position, values.claim, values.biotext);
        props.resetBioForm();
    }
    return(
        <>
            <h2>Nueva Bio</h2>
            <Form model="bio" onSubmit={(values) => handleSubmitBio(values)}>
                <div className="form-line">
                    <Control.text model=".position" id="position" name="position" placeholder="Position" className="form-control"
                    />

                </div>
                <div className="form-line">
                    <Control.text model=".claim" id="claim" name="claim" placeholder="Claim" className="form-control"
                    />

                </div>
                <div className="form-line">
                    <Control.textarea model=".biotext" id="biotext" name="biotext" placeholder="Desc Bio" className="form-control"
                    />
                </div>
                <button type="submit">
                    Enviar Bio
                </button>
            </Form>
        </>
    )
}
export default NewBio;
