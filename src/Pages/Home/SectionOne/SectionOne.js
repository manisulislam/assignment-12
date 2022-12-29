import React from 'react';
import image1 from '../../../assets/watchOne.jpg'

const SectionOne = () => {
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image1} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Our judgments, like our watches</h1>
                    <p className="py-6">Everyone looks at your watch and it represents who you are, your values and your personal style.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SectionOne;