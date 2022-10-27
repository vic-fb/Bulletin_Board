import React, {useState} from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';


function AddProjectForm(props) {
    let EMPTY_FORM = {
        user_id: '',
        title: '',
        description: '',
        image_url: '',
        project_url: '',
        classroom_id: ''
    }
    
    let { id } = useParams();
    const navigate = useNavigate();

    let [projectFormData, setProjectFormData] = useState(EMPTY_FORM);

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;


        setProjectFormData(state => ({
            ...state,
            [name]: value
         }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addNewProjectCb(projectFormData);
        setProjectFormData(EMPTY_FORM);
        navigate(`/student-projects/${id}`);
    }

    return (
        //upon log-in, user_id & classroom_id will be automatically collected
        <div className="AddProjectForm">
            <form onSubmit={handleSubmit}>
                <label>
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
                </label>

                <button type="submit">Add Project</button>
            </form> 
        </div>
    );
}

export default AddProjectForm;