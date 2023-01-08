import React from 'react';
import { toast } from 'react-hot-toast';

const SingleProduct = ({ singleProduct }) => {
    const { _id, image, price, productName } = singleProduct

    const handleDelete = singleProduct => {
        const agree = window.confirm(`are you sure to delete ${singleProduct.productName}`)
        if (agree) {
            // const id = singleProduct._id;
            // console.log(id)
            fetch(`http://localhost:5000/myProduct/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success(`Your product ${productName} deleted successfully`)
                })

        }


    }

    const hankleAdvertise = singleProduct => {
        const agree = window.confirm(`Are you want to show  your product ${singleProduct.productName} in the home page`)
        if (agree) {
            const id = singleProduct._id
            console.log(id)
            const advertiseProduct = {
                advertiseImage: singleProduct.image,
                advertiseName: singleProduct.productName,
            }
            fetch('http://localhost:5000/advertiseProducts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(advertiseProduct)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
            })

        }

    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-44' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product Name: {productName}</h2>
                <p>price: {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(singleProduct)} className="btn btn-primary">DELETE</button>
                    <button onClick={() => hankleAdvertise(singleProduct)} className="btn btn-primary">ADVERTISE</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;