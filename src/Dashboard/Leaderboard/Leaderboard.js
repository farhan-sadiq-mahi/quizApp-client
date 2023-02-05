import React, { useState } from 'react';
import Lottie from "lottie-react";
import leaderboard from "../../assets/lottie/leaderboard.json"

import logo from '../../assets/img/logo.png'

const Leaderboard = () => {

    const [quizData , setQuizData ]= useState([]);




    fetch('https://my-quiz-app-server.vercel.app/leaderboardres')
    .then(res => res.json())
    .then(data => setQuizData(data))
    .catch(error => console.log(error))
    return (
        <div className='pt-12 bg-base-100'>
            <div className='flex flex-col items-center lg:hidden'>
                <img src={logo} alt="" className='mlogo mr-2' />
            </div>
            <div className='flex justify-center items-center my-4'>
                <h2 className='text-4xl font-bold text-center '>Leader Board
                </h2>
                <div className='' style={{ width: "50px" }}><Lottie animationData={leaderboard}></Lottie></div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th></th>
                            <th>Score</th>
                            <th></th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quizData.map((data, idx)=><tr key={idx}>
                            <th>{idx +1}</th>
                            <td>{data.name}</td>
                            <td></td>
                            <td>{data.score}</td>
                            <td></td>
                            <td>{data.time}s</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;