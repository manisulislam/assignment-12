import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState('')
    return (
        <div>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">PRODUCT NAME</span>
                        <span className="label-text-alt">Alt label</span>
                    </label>
                    <input type="text"  className="input input-bordered w-full max-w-xs" {...register("productName")} placeholder="PRODUCT NAME" />
                    
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">PRICE</span>
                       
                    </label>
                    <input type="text"  className="input input-bordered w-full max-w-xs" {...register("price")} placeholder="PRICE" />
                    
                    
                </div>


                <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" />
                <p>{data}</p>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;