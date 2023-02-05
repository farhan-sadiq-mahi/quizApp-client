import React from 'react'
import { Link } from 'react-router-dom';

const Result = ({score , questions, time}) => {

  return (
    <div>
        <h1 className='text-3xl font-serif font-bold text-red-500 mt-12'>Your Score is {score} Out of {questions}</h1>
            <h2 className='text-center text-xl font-semibold text-green-500'>Quiz time <span className='font-mono'>{time}</span> seconds</h2>
        <div className='flex gap-4 justify-center items-center my-12'>
        <Link to={'/dashboard'} className='btn btn-outline btn-secondary'>Home</Link>
        <Link to={'/dashboard/leaderboard'} className='btn btn-outline btn-warning'>Position</Link>
        </div>
    </div>
  )
}

export default Result;