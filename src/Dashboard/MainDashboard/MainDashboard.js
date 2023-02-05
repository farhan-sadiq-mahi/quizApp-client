import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import './MainDashboard.css';
import Lottie from "lottie-react";
import home from "../../assets/lottie/home.json";
import quiz from "../../assets/lottie/questions.json";
import leaderboard from "../../assets/lottie/leaderboard.json";
import profile from "../../assets/lottie/profile.json";
import BottomNav from '../../Components/BottomNav/BottomNav';
import Loader from '../../Components/Loader/Loader';
const MainDashboard = () => {
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 1400)
    // }, [])

    // if (loading) {
    //     return <Loader />
    // }



    return (


        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                {/* <!-- Page content here --> */}
                <div className='bg-white'>
                    <Outlet />
                </div>
                <BottomNav />
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content font-semibold mySideBar">
                    {/* <!-- Sidebar content here --> */}
                    <div className='flex items-center mb-12'>
                        <img src={logo} alt="" className='mlogo mr-2' />
                        <h1 className='appName font-semibold'>The Quizulator</h1>
                    </div>
                    <li>
                        <Link to={'/dashboard'}>
                            <div style={{ width: "40px" }}>
                                <Lottie animationData={home}></Lottie>
                            </div>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/quiz"}>
                            <div style={{ width: "40px" }}>
                                <Lottie animationData={quiz}></Lottie>
                            </div>
                            Hot Quiz
                        </Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/leaderboard"}>
                            <div style={{ width: "40px" }}>
                                <Lottie animationData={leaderboard}></Lottie>
                            </div>
                            Ranking
                        </Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/profile"}>
                            <div style={{ width: "40px" }}>
                                <Lottie animationData={profile}></Lottie>
                            </div>
                            My Profile
                        </Link>
                    </li>
                </ul>

            </div>
        </div>

    );
};

export default MainDashboard;