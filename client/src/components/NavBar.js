import React from 'react';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';


function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>Bulletin Board</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item dropdown me-auto my-auto">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Classrooms
                            </a>
                            <DropdownMenu classrooms={props.classrooms}
                                getOptionsCb={props.getOptionsCb} />
                        </li>
                    </ul>
                        
                    <ul className="navbar-nav ms-auto">
                            <li className="nav-item" >
                            <NavLink className="nav-link" to="teacher-admin">Teacher Admin</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    );
}
{/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
        </li>
    </ul>
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
</div> */}


export default NavBar;



