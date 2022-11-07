import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import StudentProjectInfo from '../components/StudentProjectInfo';

function StudentProjectView(props) {
  const [view, setView] = useState(true);

  /* This function makes it so the StudentView displays either the info of the student's current
   project (StudentProjectInfo component) OR the StudentAdminView (containing the UpdateProejctForm
  component). The < Outlet /> in the return statement below contains the StudentAdminView. */

  function toggleView() {
    setView(!view);
  }

  return (
    <div className="StudentProjectView">
      {view ? (
        <StudentProjectInfo
          users={props.users}
          studentProjects={props.studentProjects}
          toggleViewCb={toggleView}
        />
      ) : (
        <Outlet context={[toggleView]} />
      )}
    </div>
  );
}

export default StudentProjectView;
