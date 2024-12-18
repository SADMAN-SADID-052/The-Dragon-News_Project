import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200 p-2 rounded-lg mb-6'>

           <p className='bg-[#D72050] text-base-100 px-3 py-1 rounded-lg'>Latest</p> 

           {/* Implement marquee*/}
            <Marquee pauseOnHover={true} speed={70} className='space-x-10'> 
             
               <Link to="/news">
               
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at? Accusantium voluptas eum hic adipisci. 
               Numquam beatae mollitia at vero?
               
               </Link>
              


                 
            </Marquee>
        </div>
    );
};

export default LatestNews;