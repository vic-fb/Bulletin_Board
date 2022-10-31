import React , {useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./HomeView.css"


function HomeView(props) {
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
            // <option key={c.id} value={c.id}>
            //     {c.classroom_name}
            //  </option>
            <li><Link className="dropdown-item" to={`/classrooms/${c.id}`} key={c.id} value={c.id}>
                {c.classroom_name} </Link>
            </li>
        ))
    }

    function handleClick(e) {
        let id = e.target.value
        navigate(`/classrooms/${id}`);  // redirect to specific classroom
    }


    return (
        <div className="HomeView">
            
            <h1>Welcome to Bulletin Board!</h1>
            
            {/* <form>
                <label>Choose a classroom from the menu below to get started.</label>
                <select id="classroom" name="classroom" onClick={handleClick}>
                {options}
                </select>
            </form> */}
            <p>Choose a classroom from the menu below to get started.</p>
            <div className="dropdown mx-auto">
                <a className="btn btn-info dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose a classroom
                </a>

                <ul className="dropdown-menu">
                    {options}
                </ul>
            </div>

        </div>
    );
}

export default HomeView;