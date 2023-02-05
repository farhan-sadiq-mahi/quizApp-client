import React from 'react';
import Lottie from "lottie-react";
import "../DashboardHome/DashboardHome.css"
import logo from '../../assets/img/logo.png'
import quizQuestion from "../../assets/lottie/questionquiz.json"
import { Link } from 'react-router-dom';

const Quiz = () => {
    return (
        <div>

            <section className="bg-base-100 flex flex-col items-center">
                <div className='flex items-center my-4 lg:hidden'>
                    <img src={logo} alt="" className='mlogo mr-2' />
                    <h1 className='appName font-semibold text-2xl '>The Quizulator</h1>
                </div>
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Unleash the
                        <span className="text-orange-400"> Quiz Master </span>Within,Challenge Your Brain and Climb the Leaderboard
                    </h1>
                    <div style={{ width: "140px" }}>
                        <Lottie animationData={quizQuestion}></Lottie>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <Link to={'/dashboard/leaderboard'} className="m-2 btn btn-warning text-lg">Leaderboard</Link>
                        <Link to={'/quiz'} className="m-2 btn btn-outline btn-warning text-lg">Start Quiz</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quiz;