import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
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

                        <li className='my-3'><Link to='/dashboard/addproduct'>ADD A PRODUCT</Link></li>
                        <li><Link to='/dashboard/myproduct'>MY PRODUCT</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;