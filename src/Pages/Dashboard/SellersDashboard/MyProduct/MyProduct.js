import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import SingleProduct from './SingleProduct';

const MyProduct = () => {
    const {data:MyProducts=[]}=useQuery({
        queryKey:['myProduct'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/myProduct');
            const data = res.json()
            return data;

        }
    })
    console.log(MyProducts)
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {
                MyProducts.map(singleProduct=><SingleProduct
                key={singleProduct._id}
                singleProduct={singleProduct}
                
                ></SingleProduct>)
            }
           
            
        </div>
    );
};

export default MyProduct;