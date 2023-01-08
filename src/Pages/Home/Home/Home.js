import React from 'react';
import AdvertiseProdcuts from '../../Dashboard/SellersDashboard/AdvertiseProdcuts/AdvertiseProdcuts';
import Banner from '../Banner/Banner';
import CategorySection from '../CategorySection/CategorySection';



import SectionOne from '../SectionOne/SectionOne';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <SectionOne></SectionOne>
            <CategorySection></CategorySection>
            <AdvertiseProdcuts></AdvertiseProdcuts>
           
            {/* <CategorySection></CategorySection> */}
           
        </div>
    );
};

export default Home;