import React from 'react'
import quizLoader from "../../assets/lottie/quizstart.json"
import Lottie from "lottie-react";

const QuizStartLoader = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
            <div>
                <Lottie animationData={quizLoader}></Lottie>
            </div>
        </div>
  )
}

export default QuizStartLoader;