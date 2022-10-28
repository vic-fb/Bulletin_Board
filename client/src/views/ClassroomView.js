import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../ClassroomView.css';


function ClassroomView(props) {
    let { id } = useParams();
    let classroom = props.classrooms.find(c => c.id === Number(id));
    let projects = props.studentProjects.filter(p => p.classroom_id === Number(id));
    let student = props.users.find(s => s.id === projects.user_id);

    if (props.classrooms.length === 0 || props.studentProjects.length === 0) {
        return (
            <h2>Loading</h2>
        )
    }
    
    return (
        <div className="ClassroomView">
            <nav className="NavBar">
                <Link to={`/edit-classroom`}>Edit Your Classroom</Link>
            </nav>

            <h2>Welcome to the Bulletin Board for {classroom.classroom_name}!</h2>
            {/* <div>
                {
                    projects.map((p) => (
                        <h3 key={p.id} value={p.id}>
                           <Link to={`/student-projects/${p.id}`}> {p.title} </Link>
                        </h3>
                    ))
                }
            </div> */}
            <div className='row mb-3'>
                {
                    projects.map((p) => (
                        <div className='col my-2'>
                            <div className="card" style={{ width: '18rem' }}>
                                <div key={p.id}>
                                    <div>
                                        <img src={`${p.image_url}`} className="card-img-top" alt={`${p.title}`} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{p.title}</h5>
                                        <h6 className="card-text">{student}</h6>
                                        <Link to={`/student-projects/${p.id}`} className="btn btn-primary">View Project</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }     
            </div>
            
            <Link to="/">Back to Classroom Selection</Link>
        </div>
    );
}

export default ClassroomView;

