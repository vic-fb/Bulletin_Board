import React from 'react';
import { Link, useParams } from 'react-router-dom';


function StudentProjectView(props) {
    let { id } = useParams();
    let project = props.studentProjects.find(p => p.id === Number(id));
    

    return (
        
        <div className="StudentProjectView">
            <h2>STUDENT'S NAME</h2>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
           
            <img alt={project.title} src={project.image_url}/>
            <a href={`${project.project_url}`} target='_blank'>Check out my project</a>
           
            <Link to={`/classrooms/${project.classroom_id}`}>Back to Classroom</Link>
        </div>
    );
}

export default StudentProjectView;