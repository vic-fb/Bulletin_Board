import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function UpdateAssignmentForm(props) {
    
    const navigate = useNavigate();

    let [assignmentFormData, setAssignmentFormData] = useState([]);


    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;


        setAssignmentFormData(state => ({
            ...state,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.updateAssignmentCb(assignmentFormData);
        navigate(`/classrooms/${assignmentFormData.id}`);
    }

    return (
        //upon teacher log-in, classroom_id will be automatically collected
        <div className="UpdateAssignmentForm">
            <form onSubmit={handleSubmit}>
               
                <label>Classroom</label>
                    <select id="classroom"
                        name="id"
                        value={assignmentFormData.id}
                        onChange={e => handleChange(e)}>
                        {props.options}
                    </select>
                
                <label>
                    Assignment Title
                    <input
                        type="text"
                        name="assignment_title"
                        value={assignmentFormData.assignment_title}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Assignment Description
                    <textarea
                        type="text"
                        name="assignment_desc"
                        value={assignmentFormData.assignment_desc}
                        onChange={e => handleChange(e)}
                    >
                    </textarea>
                </label>

                <button type="submit">Update Project</button>
            </form>
        </div>
    );
}

export default UpdateAssignmentForm;

