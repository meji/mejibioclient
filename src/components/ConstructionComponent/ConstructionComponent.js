import React from 'react';
import './ConstructionComponent.css'

function Construction() {
    if(process.env.REACT_APP_CONSTRUCTION){
    return (
        <div className="construction">Under Construction</div>
    )}else{
        return(
            <></>
        )
    }
}

export default Construction;
