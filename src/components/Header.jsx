import { NavLink } from "react-router-dom";

export default function Header(){
  return <>
    <div className="logo">Volunteer Management App</div>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/volunteer'>Volunteers</NavLink>
      <NavLink to='/events'>Events</NavLink>
    </nav>
  </>
}