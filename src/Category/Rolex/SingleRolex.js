import React from 'react';

const SingleRolex = ({single}) => {
    const { name, location, picture, rersalePrice, originalPrice, years, time, sellersName } = single;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-80' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>location:{location}</p>
                <p>Price: ${rersalePrice}</p>
                <p>Original Price : ${originalPrice}</p>
                <p>Years of Use : {years}</p>
                <p>Posted Time: {time}</p>
                <h3>Sellers Name: {sellersName}</h3>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                   
                    <label className="btn btn-primary" htmlFor="book-now" >BOOK NOW</label>
                </div>
            </div>
        </div>
    );
};

export default SingleRolex;