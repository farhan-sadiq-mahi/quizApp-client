import React from 'react';
import "./DashboardHome.css"
import logo from '../../assets/img/logo.png'
import learn from "../../assets/lottie/learn.json"
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
const DashboardHome = () => {
    return (
        <div className='flex flex-col items-center mb-36 lg:mb-0'>
            <div className='flex items-center my-4 lg:hidden'>
                <img src={logo} alt="" className='mlogo mr-2' />
                <h1 className='appName font-semibold text-2xl '>The Quizulator</h1>
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <Lottie animationData={learn} ></Lottie>
                        <div className='lg:w-1/2 text-center lg:text-left'>
                            <h1 className="text-5xl font-bold">Learning Just Got Fun!</h1>
                            <p className="py-6 ">Welcome to the ultimate quiz experience with The Quizulator! Test your knowledge, challenge your friends, and discover new facts with our diverse collection of quizzes. From pop culture to history, science to sports, we've got something for everyone. Ready to put your brain to the test? Let's play!</p>
                            <Link to={'/dashboard/quiz'} className="btn bg-yellow-400 border-none hover:bg-yellow-500 text-white">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;