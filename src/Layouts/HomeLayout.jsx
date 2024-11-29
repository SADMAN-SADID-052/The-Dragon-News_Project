import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';
import LeftSide from '../Components/LayOut_Conponent/LeftSide';
import RightSide from '../Components/LayOut_Conponent/RightSide';
import MainPart from '../Components/LayOut_Conponent/MainPart';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className="font-poppins">
           <header>

            <Header></Header>

            <section className='w-11/12 mx-auto'>

                <LatestNews></LatestNews>

            </section>

           
           </header>
           <nav className='w-11/12 mx-auto py-2'>
           
           <NavBar></NavBar>

           </nav>
           <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
           
           <aside className='left col-span-3'>
              
           <LeftSide></LeftSide>

           </aside>


           <section className='col-span-6'>
            <Outlet></Outlet>
           </section>
           <aside className='col-span-3'>

            <RightSide></RightSide>
           </aside>
           
           </main>
        </div>
    );
};

export default HomeLayout;