import React from 'react';
import { NavLink } from 'react-router-dom';

//import { useHistory } from "react-router-dom";

function Nav () {
    //const history = useHistory()
   /*  const navRouter = (page) =>  {
        console.log(page)
    } */
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <NavLink className="navbar-brand" to="/">
                GitHub Api 
            </NavLink>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link " to="/">
                        Top 20 
                    </NavLink>
                    <NavLink className="nav-item nav-link " to="/commits">
                        Commits
                    </NavLink>
                   
                </div>
            </div>
        </nav>      
    )
}

export default Nav;