import React from 'react';

const SingleProduct = ({singleProduct}) => {
    const {_id,image,price,productName}=singleProduct
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-44' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product Name: {productName}</h2>
                <p>price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">DELETE</button>
                    <button className="btn btn-primary">ADVERTISE</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;