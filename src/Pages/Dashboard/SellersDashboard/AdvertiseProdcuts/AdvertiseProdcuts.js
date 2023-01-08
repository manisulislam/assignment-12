import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseProduct from './AdvertiseProduct';

const AdvertiseProdcuts = () => {
    const { data: advertiseProducts = [] } = useQuery({
        queryKey: ['advertiseProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertiseProducts')
            const data = res.json();
            return data;
        }
    })
    console.log(advertiseProducts)
    return (
        <div>
            {
                advertiseProducts && <>
                    <h2 className='text-orange text-center my-8 text-2xl font-bold text-orange-500'>OUR ADVERTISE ITEMS</h2>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            advertiseProducts.map(product => <AdvertiseProduct
                                key={product._id}
                                product={product}

                            ></AdvertiseProduct>)
                        }

                    </div>
                </>

            }




        </div>
    );
};

export default AdvertiseProdcuts;