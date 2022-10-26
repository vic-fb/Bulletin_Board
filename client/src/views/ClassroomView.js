import React from 'react';
import { Link, useParams } from 'react-router-dom';


function ClassroomView(props) {
    let { id } = useParams();
    let classroom = props.classrooms.find(c => c.id === Number(id));
    let projects = props.studentProjects.filter(p => p.classroom_id === Number(id));

    return (
        <div className="ClassroomView">
            <h2>Welcome to the Bulletin Board for {classroom.classroom_name}!</h2>
            <div>
                {
                    projects.map((p) => (
                        <h3 key={p.id} value={p.id}>
                            {p.title}
                            {/* <img url={p.image_url}/> */}
                        </h3>
                    ))
                }
            </div>
            <Link to="/">Back to Select Classrooms</Link>
        </div>
    );
}

export default ClassroomView;