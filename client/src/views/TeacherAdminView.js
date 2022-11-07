import React from 'react';
import AddClassroomForm from '../components/AddClassroomForm';
import AddUserForm from '../components/AddUserForm';
import UpdateAssignmentForm from '../components/UpdateAssignmentForm';
import './TeacherAdminView.css';

// This view contains 3 form components: AddClassroomForm, AddUserForm, and UpdateAssignmentForm.

function TeacherAdminView({
  addUserCb, classrooms, getOptionsCb, users,
  addInitialProjectCb, addClassroomCb, updateAssignmentCb,
}) {
  return (
    <div className="TeacherAdminView">
      <h1>Teacher Admin Hub</h1>
      <div className="TeacherAdminGrid">
        <div className="col1">
          <h2>Add a Classroom</h2>
          <AddClassroomForm addClassroomCb={addClassroomCb} />
        </div>

        <div className="col2">
          <h2>Add a User</h2>
          <AddUserForm
            addUserCb={addUserCb}
            classrooms={classrooms}
            getOptionsCb={getOptionsCb}
            users={users}
            addInitialProjectCb={addInitialProjectCb}
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
