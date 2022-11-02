import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ClassroomView.css";

function ClassroomView(props) {
  let { id } = useParams();
  let classroom = props.classrooms.find((c) => c.id === Number(id)); // find classroom in db that matches URL id
  let classroomProjects = props.studentProjects.filter(
    (p) => p.classroom_id === Number(id) // get projects that belong to that classroom
  );
  let classroomStudents = props.users.filter(
    (s) => s.classroom_id === Number(id)
  ); // get students that belong to that classroom

  if (props.classrooms.length === 0 || props.studentProjects.length === 0) {
    return <h2>Loading</h2>;
  } // display loading message until useEffect is able to get data from the db

  function projectAuthorName(projectObj) {
    let authorObj = classroomStudents.find((s) => s.id === projectObj.user_id);
    return authorObj.first_name;
  } // get first name of student who created the project

  return (
    <div className="ClassroomView">
      <h2>Welcome to the Bulletin Board for {classroom.classroom_name}!</h2>

      <h3> Current Assignment: {classroom.assignment_title}</h3>

      <p>{classroom.assignment_desc}</p>

      <div className="row mb-3">
        {classroomProjects.map((p) => (
          <div key={p.id} className="col my-2">
            <div className="card" style={{ width: "18rem" }}>
              <div key={p.id}>
                <div>
                  <img
                    src={`${p.image_url}`}
                    className="card-img-top"
                    alt={`${p.title}`}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <h6 className="card-text">By {projectAuthorName(p)}</h6>
                  <Link
                    to={`/student-projects/${p.id}`}
                    className="btn btn-primary"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassroomView;
