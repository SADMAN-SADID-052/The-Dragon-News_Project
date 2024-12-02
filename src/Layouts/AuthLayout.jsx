import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const AuthLayout = () => {
    return (

        <div className="font-poppins bg-[#F3F3F3]">
             
             <header className="w-11/12 py-3  mx-auto mt-6">
                <NavBar></NavBar>
             </header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;