import React, { useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function AddClassroomForm(props) {
    let EMPTY_FORM = {
        classroom_name: '',
        assignment_title: '',
        assignment_desc: '',
    }

    const navigate = useNavigate();

    let [classroomFormData, setClassroomFormData] = useState(EMPTY_FORM);

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;


        setClassroomFormData(state => ({
            ...state,
            [name]: value
         }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // props.addNewClassroomCb(classroomFormData); NOT WORKING for some reason
        setClassroomFormData(EMPTY_FORM);
        navigate(`/`);
    }

    return (
        //upon log-in, user_id will be automatically collected
        <div className="AddProjectForm">
            <form onSubmit={handleSubmit}>
                {/* <label>
                    Project Title
                    <input
                        type="text"
                        name="title"
                        value={projectFormData.title}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Project Description
                    <textarea
                        type="text"
                        name="description"
                        value={projectFormData.description}
                        onChange={e => handleChange(e)}
                    >
                    </textarea>
                </label>

                <label>
                    Image Link
                    <input
                        type="url"
                        name="image_url"
                        value={projectFormData.image_url}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Project Link
                    <input
                        type="url"
                        name="project_url"
                        value={projectFormData.project_url}
                        onChange={e => handleChange(e)}
                    />
                </label> */}

                <button type="submit">Add Classroom</button>
            </form> 
        </div>
    );
}

export default AddClassroomForm;