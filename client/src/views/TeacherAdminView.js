import React from 'react';
import AddClassroomForm from '../components/AddClassroomForm';
import AddUserForm from '../components/AddUserForm';
import UpdateAssignmentForm from '../components/UpdateAssignmentForm';
import './TeacherAdminView.css';

function TeacherAdminView({
  addUserCb, classrooms, getOptionsCb, addClassroomCb, updateAssignmentCb,
}) {
  return (
    <div className="TeacherAdminView">
      <h1>Teacher Admin Hub</h1>
      <div className="TeacherAdminGrid">
        <div className="col1 px-0">
          <h2>Add a Classroom</h2>
          <AddClassroomForm addClassroomCb={addClassroomCb} />
        </div>

        <div className="col2">
          <h2>Add a Student</h2>
          <AddUserForm
            addUserCb={addUserCb}
            classrooms={classrooms}
            getOptionsCb={getOptionsCb}
          />
        </div>

        <div className="col3">
          <h2>Update an Assignment</h2>
          <UpdateAssignmentForm
            updateAssignmentCb={updateAssignmentCb}
            getOptionsCb={getOptionsCb}
            classrooms={classrooms}
          />
        </div>
      </div>
    </div>
  );
}

export default TeacherAdminView;
