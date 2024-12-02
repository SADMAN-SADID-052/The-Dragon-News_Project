import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {

    const {user} = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
             <div className="">{user && user.name}</div>

            <div className="nav space-x-5">

             <Link>Home</Link>
             <Link>Career</Link>
             <Link>About</Link>
            
            </div>

            <div className='login'>

                <div className="div flex gap-2">
                    <img src={userIcon} alt="" />
                    <Link to="/auth/login" className='btn btn-neutral'>LogIn</Link>
                </div>

            </div>
            
        </div>
    );
};

export default NavBar;