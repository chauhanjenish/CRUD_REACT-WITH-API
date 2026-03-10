import React from "react";
import { Link, NavLink} from "react-router-dom";
import './App.css'
const Navbar = () =>{
    return (
        <>
            <div className="Header">
                <ul className="list-unstyled">
                    <li>
                        <NavLink to={"/"} className="link border p-1 rounded-2">Home</NavLink>
                        <NavLink to={"/add"} className="link border p-1 rounded-2">AddUser</NavLink>
                        <NavLink to={'/addEmp'} className="link border p-1 rounded-2">AddEmployee</NavLink>
                        <NavLink to={"/show"} className="link border p-1 rounded-2">ShowUser</NavLink>
                        <NavLink to={"/showEmp"} className="link border p-1 rounded-2">ShowEmployee</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Navbar