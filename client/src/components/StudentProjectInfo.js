import React from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import "./StudentProjectInfo.css"


function StudentProjectInfo(props) {
    let { id } = useParams();
    let project = props.studentProjects.find(p => p.id === Number(id));
    let user = props.users.find(u => u.id === project.user_id);

    if (props.users.length === 0 || project.length === 0) {
        return (
            <h2>Loading</h2>
        )
    }

    return (
        //upon log-in, user_id will be automatically collected
        <div className="StudentProjectInfo">
            <div className='row'>
                <Link to='update-project' class="btn btn-outline-warning mt-2 w-auto ms-auto me-3" role="button" onClick={props.toggleViewCb}>Display a New Project</Link>
            </div>

            <div className='mx-auto'>
                <h2>Welcome to {user.first_name}'s project page!</h2>
            
            
            <div className='grid'>
                <div>
                    <img alt={project.title} src={project.image_url} />
                </div>
                <div className='proj-info'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a class="btn btn-info" role="button" href={`${project.project_url}`} target='_blank'>Check out my project</a>
                </div>
            </div>
        </div>
                
        </div>
    );
}

export default StudentProjectInfo;



