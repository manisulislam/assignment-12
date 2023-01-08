import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

import SingleRolex from './SingleRolex';

const Rolex = (category_id) => {
   const [WatechesInfo, setWatechesInfo]= useState([])
   useEffect(()=>{
    fetch(`http://localhost:5000/WatchCategory/?category_id=${category_id}`)
    .then(res => res.json())
    .then(data => {
        setWatechesInfo(data)
    })
   },[category_id])


   
    


    return (
        <div>
            <h2>this is rolex page</h2>
            
            <div className='grid m-6 grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
            {
                WatechesInfo.map(single => <SingleRolex
                key={single._id}
                single={single}
                ></SingleRolex>)
            }
            
            </div>
            <BookingModal
            
            
            ></BookingModal>
        </div>
        
    );
};

export default Rolex;