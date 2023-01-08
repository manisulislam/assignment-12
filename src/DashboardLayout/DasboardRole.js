import React from 'react';
import { Link } from 'react-router-dom';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';

const DasboardRole = ({rolesOption}) => {

    let {role}= rolesOption;
   
    return (
        <div>
            
            {
                role="SELLERS"&&
                <div>
                    <li><Link to='/dashboard/myProduct'>MY PRODUCT</Link></li>
                <li><Link to='/dashboard/allUsers'>ALL USERS</Link></li>

                </div>
                
            }

            {
                role="BUYERS" && <li><Link to='/dashboard/myOrders'>MY ORDERS</Link></li>
            }
            {
                role="admin" && <AllUsers></AllUsers>
            }
        
          

        </div>
    );
};

export default DasboardRole;