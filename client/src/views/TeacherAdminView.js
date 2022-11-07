import React from 'react';
import AddClassroomForm from '../components/AddClassroomForm';
import AddUserForm from '../components/AddUserForm';
import UpdateAssignmentForm from '../components/UpdateAssignmentForm';
import './TeacherAdminView.css';

// This view contains 3 form components: AddClassroomForm, AddUserForm, and UpdateAssignmentForm.

function TeacherAdminView(props) {
  return (
    <div className="TeacherAdminView">
      <h1>Teacher Admin Hub</h1>
      <div className="TeacherAdminGrid">
        <div className="col1">
          <h2>Add a Classroom</h2>
          <AddClassroomForm addClassroomCb={props.addClassroomCb} />
        </div>

        <div className="col2">
          <h2>Add a User</h2>
          <AddUserForm
            addUserCb={props.addUserCb}
            classrooms={props.classrooms}
            getOptionsCb={props.getOptionsCb}
            users={props.users}
            addInitialProjectCb={props.addInitialProjectCb}
          />
        </div>

        <div className="col3">
          <h2>Update an Assignment</h2>
          <UpdateAssignmentForm
            updateAssignmentCb={props.updateAssignmentCb}
            getOptionsCb={props.getOptionsCb}
            classrooms={props.classrooms}
          />
        </div>
      </div>
    </div>
  );
}

export default TeacherAdminView;
