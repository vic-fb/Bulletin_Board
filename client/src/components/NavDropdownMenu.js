import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function NavDropdownMenu(props) {

    let [options, setOptions] = useState([]);

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

    return (
        <div className='NavDropdownMenu'>
            <ul className="dropdown-menu">
                {options}
            </ul>
        </div>
    );
}

export default NavDropdownMenu;



