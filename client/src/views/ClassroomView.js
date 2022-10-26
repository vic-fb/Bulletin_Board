import React from 'react';
import { Link, useParams } from 'react-router-dom';


function ClassroomView(props) {
    let { id } = useParams();
    let classroom = props.classrooms.find(c => c.id === Number(id));


    return (
        <div className="ClassroomView">
            <h2>Welcome to the Bulletin Board for {classroom.classroom_name}!</h2>
          
        </div>
    );
}

export default ClassroomView;