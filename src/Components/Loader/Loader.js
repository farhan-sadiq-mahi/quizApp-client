import React from 'react';
import quizLoader from "../../assets/lottie/quizloader.json"
import Lottie from "lottie-react";
const Loader = () => {

    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <Lottie animationData={quizLoader}></Lottie>
            </div>
        </div>
    );
};

export default Loader;