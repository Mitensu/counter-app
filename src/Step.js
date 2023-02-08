import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import './Step.css';

const Step = (props) => {

    return (
        <form>
            <label>Step:</label>
            <input type='number' placeholder="1" min={1} onChange={(event) => props.stepMethod(event.target.value)}/>
        </form>
    )

}


export default Step;