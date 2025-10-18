import userImg from '../assets/user.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

import { use } from 'react';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    console.log('click');
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex items-center justify-between">
      <div>{user && user.email}</div>
      <div className="flex items-center my-8 gap-8 text-accent">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <img src={userImg} alt="" />

        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-8">
            Log out
          </button>
        ) : (
          <Link to={'/auth/login'} className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
