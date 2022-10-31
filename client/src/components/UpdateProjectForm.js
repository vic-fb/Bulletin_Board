import React, {useState} from 'react';
import { useParams, useOutletContext} from 'react-router-dom';


function UpdateProjectForm(props) {
    let { id } = useParams();

    let project = props.studentProjects.find(p => p.id === Number(id));
    let userId = project.user_id;
    let classroomId = project.classroom_id;

    let EMPTY_FORM = {
        user_id: userId,
        title: project.title,
        description: project.description,
        image_url: project.image_url,
        project_url: project.project_url,
        classroom_id: classroomId,
        id: id
    }

    let [projectFormData, setProjectFormData] = useState(EMPTY_FORM);
    const [toggleView] = useOutletContext();

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
        props.updateProjectCb(projectFormData);
        toggleView();
    }

    return (
        //upon log-in, user_id & classroom_id will be automatically collected
        <div className="UpdateProjectForm">
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

                <button type="submit" className="btn btn-info">Update Project</button>
            </form>
        </div>
    );
}

export default UpdateProjectForm;
