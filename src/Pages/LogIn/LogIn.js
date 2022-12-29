import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';

const LogIn = () => {
    const {createNewUser}= useContext(authContext)
    const provider = new GoogleAuthProvider()

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;    
       
        const logInInfo = { email, password,}
        console.log(logInInfo)
        form.reset()
    }

    const  handleGoogleSignIn =()=>{
        createNewUser(provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log('error', error))

    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />


                        </div>
                        <select className="select select-bordered w-full max-w-xs">
                            <option name='buyers' selected>BUYERS </option>
                            <option name='sellers'>SELLERS</option>
                           
                        </select> 
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary">GOOGLE</button>

                        <label className="label">
                            <p className="label-text-alt">Already new to our webisite? <Link to='/register'><span className='text-orange-500'>Register</span></Link></p>
                        </label>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;