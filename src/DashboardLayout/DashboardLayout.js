import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import DasboardRole from './DasboardRole';

const DashboardLayout = () => {

    // const [roles, setRoles]= useState()
    // const { data: roles = [] } = useQuery({
    //     queryKey: ['rolesUser'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/roleUser');
    //         const data = await res.json();
    //         return data;

    //     }

    // })
    // console.log(roles)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">

                    <ul className="menu p-4  w-80 bg-base-100 text-base-content">

                        {/* {
                            roles.map(rolesOption => <DasboardRole
                                key={rolesOption._id}
                                rolesOption={rolesOption}
                            ></DasboardRole>)
                        } */}

                        <li className='my-3'><Link to='/dashboard/addProduct'>ADD A PRODUCT</Link></li>
                        <li><Link to='/dashboard/myProduct'>MY PRODUCT</Link></li>
                        <li><Link to='/dashboard/allUsers'>ALL USERS</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;