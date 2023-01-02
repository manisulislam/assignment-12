import React, { useEffect, useState } from 'react';

import SingleRolex from './SingleRolex';

const Rolex = () => {
//    const [rolexData, setRolexData]= useState([])
//    useEffect(()=>{
//     fetch('http://localhost:5000/rolexWatch')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//    },[])
    


    return (
        <div>
            <h2>this is rolex page</h2>
            {/* <h1>rolex data : {rolexData.length}</h1> */}
            {/* {
                rolexData.map(single => <SingleRolex
                key={single._id}
                single={single}
                ></SingleRolex>)
            } */}
        </div>
        
    );
};

export default Rolex;