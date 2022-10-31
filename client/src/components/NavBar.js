import React, {useState, useEffect} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import "./NavBar.css"


function NavBar(props) {
    let [options, setOptions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let temp = generateOptions()
        setOptions(temp);
        props.getOptionsCb(options);
    }, [props.classrooms]); // call whenever classrooms changes

    /* had to create generateOptions() outside rendering statement b/c page was 
    being drawn before classrooms was loaded, so had to create options state and 
    useEffect function to make sure data was available before page was rendered*/
    function generateOptions() {
        return props.classrooms.map((c) => (
            <li><Link className="dropdown-item" to={`/classrooms/${c.id}`} key={c.id} value={c.id}>
                {c.classroom_name} </Link>
            </li>
        ))
    }
    <a className="dropdown-item" href="#">Action</a>
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={'/'}>Bulletin Board</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item dropdown my-auto">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Classrooms
                            </a>
                            <ul className="dropdown-menu">
                                {options}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    );
}

export default NavBar;



