import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';

const PrivateRoutes = ({Children}) => {
    const location = useLocation()

    const {user} = useContext(authContext)
    if(user && user.uid){
        return Children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default PrivateRoutes;