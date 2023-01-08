import React from 'react';

const AdvertiseProduct = ( {product}) => {
    const {advertiseImage, advertiseName}= product;
    return (
        <div className="card w-96 my-12 bg-base-100 shadow-xl">
            <figure><img src={advertiseImage} alt="Shoes" /></figure>
           
            
            <div className="card-body">
            <h2 className="card-title">Advertise product name: {advertiseName}</h2>
               
            </div>
        </div>
    );
};

export default AdvertiseProduct;