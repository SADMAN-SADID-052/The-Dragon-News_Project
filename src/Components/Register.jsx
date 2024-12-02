import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const{createNewUser,user,setUser} = useContext(AuthContext);

  const handleSubmit = (e) =>
  {

    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log({name,email,photo,password});

    createNewUser(email,password) 

    .then((result) => {
      
      const user = result.user;
     setUser(user);
     console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      console.log(errorCode,errorMessage);
    });

  }
    return (
        <div className='min-h-screen flex justify-center items-center'>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
            <h2 className='text-2xl font-semibold text-center mt-4'>Register</h2>
              <form onSubmit={handleSubmit} className="card-body">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input name="name" type="name" placeholder="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input name="photo" type="photo" placeholder="Please Provide Your Photo URL" className="input input-bordered" required />
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input name = "email" type="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p className='text-xl font-semibold p-4'>Already Have an Account?<Link to="/auth/login" className='text-blue-500'>Login</Link></p>
            </div>
                    
                </div>
    );
};

export default Register;