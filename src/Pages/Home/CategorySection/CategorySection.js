import React, { useEffect, useState } from 'react';

import SingleCategory from './SingleCategory';



const CategorySection = () => {
    // const categoryInfo = useLoaderData()
    // console.log(categoryInfo)


    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])



    return (

        <div >
           <h1 className='text-orange-500  text-2xl text-center font-semibold'>OUR THREE BRAND CATEGORY</h1>
            {/* <div className='flex justify-center my-12'>
                <Link to={`/category`}><button className="btn btn-outline btn-secondary mr-8">ROLEX</button></Link>
                <Link to='/category/2'><button className="btn btn-outline btn-secondary mr-8 ">OMEGA</button></Link>

                <Link to='/category/3'><button className="btn btn-outline btn-secondary mr-8">CARTIER</button></Link>

            </div> */}
            <div className='grid grid-cols-3 gap-6'>
            {
                categories.map(category => 
                    <SingleCategory
                        key={category._id}
                        categoryInfo={category}
                    
                    ></SingleCategory>
            
            )

            } 

            </div>

            

        </div>


    );
};

export default CategorySection;


// <SingleCategory
//     key={category._id}
//     categoryInfo={category}

// ></SingleCategory>