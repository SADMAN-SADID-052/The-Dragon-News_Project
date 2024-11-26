import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 py-2 mt-6'>
          

          <div className="log">
          <img className='w-[300px]' src={logo} alt="" />

          </div>

          <h2 className='text-gray-400'>Journalism Without Fear or Favour </h2>

          {/* Format the Time using Moment.js */}

          <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>

          
            
        </div>
    );
};

export default Header;