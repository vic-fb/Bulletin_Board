import React, {useState} from 'react';
import {  Outlet} from 'react-router-dom';
import StudentProjectInfo from "../components/StudentProjectInfo"
import "../StudentProjectView.css"

function StudentProjectView(props) {
    
    let [view, setView] = useState(true);
    
    function toggleView() {
        setView(!view);
    }

    return (
        
        <div className="StudentProjectView">
            {
            view                 
                ? <StudentProjectInfo 
                    users={props.users} 
                    studentProjects={props.studentProjects}
                    toggleViewCb={toggleView}
                />
                : <Outlet context={[toggleView]}/>
            }
            
        </div>
    );
}

export default StudentProjectView;