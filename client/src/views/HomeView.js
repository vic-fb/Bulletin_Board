import React , {useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./HomeView.css"
import DropdownMenu from '../components/DropdownMenu';


function HomeView(props) {

    return (
        <div className="HomeView">
            
            <h1>Welcome to Bulletin Board!</h1>
            
            <p>Choose a classroom from the menu below to get started.</p>
            <div className="dropdown mx-auto">
                <a className="btn btn-info dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose a classroom
                </a>

                <DropdownMenu 
                    classrooms={props.classrooms}
                    getOptionsCb={props.getOptionsCb} 
                />

            </div>

        </div>
    );
}

export default HomeView;