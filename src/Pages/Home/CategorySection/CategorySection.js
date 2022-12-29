import React from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
    return (

        <div >
            <h1 className='text-orange-500  text-2xl text-center font-semibold'>OUR THREE BRAND CATEGORY</h1>
            <div className='flex justify-center my-12'>
                <Link to='/category/1'><button className="btn btn-outline btn-secondary mr-8">ROLEX</button></Link>
                <Link to='/category/2'><button className="btn btn-outline btn-secondary mr-8 ">OMEGA</button></Link>

                <Link to='/category/3'><button className="btn btn-outline btn-secondary mr-8">CARTIER</button></Link>

            </div>
        </div>


    );
};

export default CategorySection;