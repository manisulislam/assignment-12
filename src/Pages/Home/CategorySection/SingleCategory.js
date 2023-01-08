import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({categoryInfo}) => {
    const {_id, category_name}=categoryInfo
   

    
    return (
        <div className='m-12'>
            <Link to={`/category/${_id}`}><button className="btn btn-outline btn-secondary mr-8">{category_name}</button></Link>
            

        </div>
    );
};

export default SingleCategory;