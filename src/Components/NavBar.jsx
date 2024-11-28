import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"

const NavBar = () => {
    return (
        <div className='flex justify-between'>
             <div className=""></div>
            <div className="nav space-x-5">

             <Link>Home</Link>
             <Link>Career</Link>
             <Link>About</Link>
            
            </div>

            <div className='login'>

                <div className="div flex gap-2">
                    <img src={userIcon} alt="" />
                    <button className='btn btn-neutral'>LogIn</button>
                </div>

            </div>
            
        </div>
    );
};

export default NavBar;