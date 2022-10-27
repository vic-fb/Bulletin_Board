import React from 'react';
import { Link, useParams } from 'react-router-dom';


function ClassroomView(props) {
    let { id } = useParams();
    let classroom = props.classrooms.find(c => c.id === Number(id));
    let projects = props.studentProjects.filter(p => p.classroom_id === Number(id));

    if (props.classrooms.length === 0 || props.studentProjects.length === 0) {
        return (
            <h2>Loading</h2>
        )
    }
    
    return (
        <div className="ClassroomView">
            <h2>Welcome to the Bulletin Board for {classroom.classroom_name}!</h2>
            <div>
                {
                    projects.map((p) => (
                        <h3 key={p.id} value={p.id}>
                           <Link to={`/student-projects/${p.id}`}> {p.title} </Link>
                        </h3>
                    ))
                }
            </div>
            <Link to="/">Back to Classroom Selection</Link>
        </div>
    );
}

export default ClassroomView;

