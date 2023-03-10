import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm()
  const [data, setData] = useState('')
    const navigate = useNavigate()
    // console.log(data)
    const imageKey = process.env.REACT_APP_imageKey
    

    const handleProduct = data => {

        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url)
                    const product = {
                        productName: data.productName,
                        price: data.price,
                        mobileNumber: data.mobileNumber,
                        years: data.years,
                        image: imageData.data.url,

                        category: data.category,
                        condition: data.condition,
                        location: data.location,
                        description: data.description,

                    }
                    fetch('http://localhost:5000/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('Your product added successfully')
                            navigate('/dashboard/myProduct')
                            
                        })
                        .catch(error => console.log(error))

                }

            })
            reset()
        



        console.log(data)






        

    }



    return (


        <div>
            <form onSubmit={handleSubmit(handleProduct)}>



                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">PRODUCT NAME</span>

                    </label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("productName")} placeholder="PRODUCT NAME" />


                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">PRICE</span>

                    </label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("price")} placeholder="PRICE" />


                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">MOBILE NUMBER</span>

                    </label>
                    <input type="number" className="input input-bordered w-full max-w-xs" {...register("mobileNumber")} placeholder="MOBILE NUMBER" />


                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">YEARS OF PURCHASE</span>

                    </label>
                    <input type="number" className="input input-bordered w-full max-w-xs" {...register("years")} placeholder="YEARS OF PURCHASE" />


                </div>


                <div {...register("category", { required: true })} className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">SELECT CATEGORY</span>

                    </label>
                    <select className="select select-bordered">
                        <option selected>ROLEX</option>
                        <option>OMEGA</option>
                        <option>CARTIER</option>

                    </select>

                </div>
                <div {...register("condition", { required: true })} className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">SELECT CONDITION</span>

                    </label>
                    <select className="select select-bordered">
                        <option>EXCELLENT</option>
                        <option>GOOD</option>
                        <option>FAIR</option>

                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">SELECT LOCATION</span>

                    </label>
                    <select  {...register("location", { required: true })} className="select select-bordered">
                        <option>DHAKA</option>
                        <option>CHITTAGONG</option>
                        <option>RAJSAHI</option>
                        <option>KHULNA</option>
                        <option>SHYLET</option>
                        <option>DINAJPUR</option>

                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">PHOTO</span>

                    </label>
                    <input type="file" className="input input-bordered w-full max-w-xs" {...register("image")} />


                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">DESCRIPTION</span>

                    </label>
                    <textarea  {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>



                <input className="btn btn-outline btn-primary my-2 w-full max-w-xs mx-auto" type='submit' value="SUBMIT" />

            </form>
        </div>
    );
};

export default AddProduct;