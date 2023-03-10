import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';


const Register = () => {
    const { userNew } = useContext(authContext)
    const { register, handleSubmit, reset } = useForm();

    // const [data, setData] = useState('')
    const navigate =useNavigate()
    



    // const onSubmit = data => console.log(data);
    const handleRegister = data => {



        const email = data.email
        const name = data.name;
        const role = data.role
        const password = data.password;
        console.log(data)

        const users = { email,name, role }
        console.log(users)
        userNew(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log('error', error))
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                    
                },
                body: JSON.stringify(users)

            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                getUser(email)
                
            })

        reset()



    }

    const getUser = email =>{
        fetch(`http://localhost:5000/jwt/?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)

                navigate('/')

            }
        })
    }




    return (
        <div className="hero min-h-screen my-12 ">

            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input {...register("firstName")} type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div> */}
                        <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                       
                    </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  {...register("email")} type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input  {...register("password")} type="password" name='password' placeholder="password" className="input input-bordered" />


                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Select account</span>

                            </label>
                            <select {...register("role")} className="select select-bordered">
                                <option selected>BUYERS</option>
                                <option>SELLERS</option>

                            </select>

                        </div>


                        <label className="label">
                            <p className="label-text-alt">Already have an account? <Link to='/login'><span className='text-orange-500'>login</span></Link></p>
                        </label>


                        <input className="btn btn-primary" type="submit" value='REGISTER' />


                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;