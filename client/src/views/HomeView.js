import React , {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


function HomeView(props) {
    let [options, setOptions] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        let temp = generateOptions()
        setOptions(temp);
      }, [props.classrooms]); // call whenever classrooms changes

/* had to create generateOptions() outside rendering statement b/c page was 
being drawn before classrooms was loaded, so had to create options state and 
useEffect function to make sure data was available before page was rendered*/
   function generateOptions() {  
        return props.classrooms.map((c) => (
            <option key={c.id} value={c.id}>
                {c.classroom_name}
             </option>
        ))
    }

    function handleChange(e) {
        let id = e.target.value
        navigate(`/classrooms/${id}`);  // redirect to specific classroom
    }

    return (
        <div className="HomeView">
            <h2>Welcome to Bulletin Board!</h2>
            
            <form>
                <label>Choose a classroom from the menu below to get started.</label>
                <select id="classroom" name="classroom" onClick={handleChange}>
                {options}
                </select>
            </form>
        </div>
    );
}

export default HomeView;