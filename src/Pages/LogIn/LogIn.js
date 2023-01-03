import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';

const LogIn = () => {

    const { createNewUser, userSignIn } = useContext(authContext)
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()
    const { register, handleSubmit,reset } = useForm()



    const [data, setData] = useState('')

    const handleLogIn = data => {
        console.log(data)
        
       
       
       

         
       
        userSignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => console.log('error', error))
        reset()
    }

    const handleGoogleSignIn = () => {
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
                    <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" name='password' placeholder="password" className="input input-bordered" />


                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">SELECT YOUR ACCOUNT</span>
                                
                            </label>
                            <select  className="select select-bordered w-full max-w-xs" {...register("category", { required: true })}>
                            <option name='buyers' selected>BUYERS </option>
                            <option name='sellers'>SELLERS</option>

                        </select>
                           
                        </div>



                        

                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary">GOOGLE</button>

                        <label className="label">
                            <p className="label-text-alt">Already new to our webisite? <Link to='/register'><span className='text-orange-500'>Register</span></Link></p>
                        </label>

                        <input className="btn btn-primary" type="submit" value="LogIn" />

                        {/* <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
        // <div>
        //     <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

        //         <input {...register("firstName")} placeholder="First name" />
        //         <select {...register("category", { required: true })}>
        //             <option value="">Select...</option>
        //             <option value="A">Option A</option>
        //             <option value="B">Option B</option>
        //         </select>
        //         <textarea {...register("aboutYou")} placeholder="About you" />
        //         <p>{data}</p>
        //         <input type="submit" />
        //     </form>
        // </div>
    );
};

export default LogIn;