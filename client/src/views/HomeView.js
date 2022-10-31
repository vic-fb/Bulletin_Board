import React , {useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./HomeView.css"
import DropdownMenu from '../components/DropdownMenu';


function HomeView(props) {
//     let [options, setOptions] = useState([]);
//     const navigate = useNavigate();
    

//     useEffect(() => {
//         let temp = generateOptions()
//         setOptions(temp);
//         props.getOptionsCb(options);
//       }, [props.classrooms]); // call whenever classrooms changes

// // /* had to create generateOptions() outside rendering statement b/c page was 
// // being drawn before classrooms was loaded, so had to create options state and 
// // useEffect function to make sure data was available before page was rendered*/
//    function generateOptions() {  
//         return props.classrooms.map((c) => (
//             <li><Link className="dropdown-item" to={`/classrooms/${c.id}`} key={c.id} value={c.id}>
//                 {c.classroom_name} </Link>
//             </li>
//         ))
//     }
    console.log(props)
    return (
        <div className="HomeView">
            
            <h1>Welcome to Bulletin Board!</h1>
            
            <p>Choose a classroom from the menu below to get started.</p>
            <div className="dropdown mx-auto">
                <a className="btn btn-info dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose a classroom
                </a>

                <DropdownMenu classrooms={props.classrooms}
                    getOptionsCb={props.getOptionsCb} />

            </div>

        </div>
    );
}

export default HomeView;