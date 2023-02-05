import React from 'react';
import Lottie from "lottie-react";
import home from "../../assets/lottie/home.json";
import quiz from "../../assets/lottie/questions.json";
import leaderboard from "../../assets/lottie/leaderboard.json";
import profile from "../../assets/lottie/profile.json";
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className="w-full h-screen">
            <section id="bottom-navigation" className="lg:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow pt-2">

                <div id="tabs" className="flex justify-between">
                    <Link to={'/dashboard'} className="w-full justify-center inline-block text-center ">
                        <div style={{ width: "35px" }} className="inline-block">
                            <Lottie animationData={home}></Lottie>
                        </div>
                        <span className="tab tab-home block text-xs">Home</span>
                    </Link>
                    <Link to={'/dashboard/quiz'} className="w-full justify-center inline-block text-center ">
                        <div style={{ width: "35px" }} className="inline-block">
                            <Lottie animationData={quiz}></Lottie>
                        </div>
                        <span className="tab tab-home block text-xs">Hot Quiz</span>
                    </Link>
                    <Link to={'/dashboard/leaderboard'} className="w-full justify-center inline-block text-center ">
                        <div style={{ width: "35px" }} className="inline-block">
                            <Lottie animationData={leaderboard}></Lottie>
                        </div>
                        <span className="tab tab-home block text-xs">Ranking </span>
                    </Link>
                    <Link to={'/dashboard/profile'} className="w-full justify-center inline-block text-center ">
                        <div style={{ width: "35px" }} className="inline-block">
                            <Lottie animationData={profile}></Lottie>
                        </div>
                        <span className="tab tab-home block text-xs">My Profile </span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BottomNav;