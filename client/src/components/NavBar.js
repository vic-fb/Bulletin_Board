import React from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
// import "./NavBar.css"


function NavBar(props) {
    

    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={'/'}>Bulletin Board</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={'/teacher-admin'}>Teacher Admin</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
       
    );
}

export default NavBar;



