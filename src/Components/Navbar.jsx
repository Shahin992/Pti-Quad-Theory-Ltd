import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      
      
      
     
    </div>
    <Link to={'./'}>
    <a className="btn btn-ghost text-4xl font-extrabold">pti.</a>
    </Link>
    <div className="form-control relative block md:hidden">
      <FaSearch className="absolute left-4 top-4 size-5 flex items-center text-orange-400" />
      <input
        type="text"
        placeholder="Search Audiobook"
        className="input input-bordered pl-12 w-36 md:w-[500px]"
      />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <div className="flex justify-center gap-x-4">

    <div className="form-control relative">
      <FaSearch className="absolute left-4 top-4 size-5 flex items-center text-orange-400" />
      <input
        type="text"
        placeholder="Search Audiobook"
        className="input input-bordered pl-12 w-24 md:w-[500px]"
      />
    </div>
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <p className="flex justify-center items-center gap-x-3 text-xl font-medium">Menu <FaAngleDown className="text-orange-400" /></p>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Home
          </a>
        </li>
        <li><a>Details</a></li>
        <li><a>Category</a></li>
        <li><a>My Favorites</a></li>
        <li><a>Profile</a></li>
        <li><a>Log In/Sign Up</a></li>
      </ul>
    </div>
   </div>
    </ul>
  </div>
  <div className="navbar-end   ">
  <BiUser className="size-12 bg-orange-500 text-white rounded-full" />
  </div>
</div>
            
        </div>
    );
};

export default Navbar;