import user from '../assets/user.png';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-3 text-accent">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <img src={user} alt="" />
        <button className="btn btn-primary px-8">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
