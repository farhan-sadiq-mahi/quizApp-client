import React, { useContext, useEffect, useState } from 'react';
import QuizQuestion from './QuizQuestion';
import logo from '../assets/img/logo.png'
import './QuizPage.css'
import Result from './Result';
import QuizStartLoader from '../Components/Loader/QuizStartLoader';
import { useStopwatch } from 'react-timer-hook';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const QuizPage = () => {

const questions = [
    {
        Question: 'What is Your name ?',
        ans: [
            {option: 'No Name', isCorrect : true},
            {option: 'Your Name', isCorrect : false},
            {option: 'Hear Name', isCorrect : false},
            {option: 'Kam Name', isCorrect : false}
        ]
    },
    {
        Question: 'Klk Jabi ?',
        ans: [
            {option: 'Koi ?', isCorrect : true},
            {option: 'Fukki  Soi', isCorrect : false},
            {option: 'Nah Kam ase', isCorrect : false},
            {option: 'Chol', isCorrect : false}
        ]
    },
    {
        Question: 'Pata K lagabe?',
        ans: [
            {option: 'Hero Alom', isCorrect : false},
            {option: 'Cakib Khan', isCorrect : false},
            {option: 'Daya Vabi', isCorrect : false},
            {option: 'Jar gas ase', isCorrect : true}
        ]
    },
    {
        Question: 'Babu Khaico ?',
        ans: [
            {option: 'Khaite Dey nai', isCorrect : false},
            {option: 'Khaici', isCorrect : false},
            {option: 'Babu Nai', isCorrect : true},
            {option: 'Khabo Na', isCorrect : false}
        ]
    },
    {
        Question: 'How are You?',
        ans: [
            {option: 'Good', isCorrect : false},
            {option: 'Alhumdulliha', isCorrect : true},
            {option: 'Xoxx AF', isCorrect : false},
            {option: 'Bolbo na', isCorrect : false}
        ]
    },
]
const {user} = useContext(AuthContext);
const [currentQuestion , setCurrentQuestion]= useState(0);
const [score , setScore] = useState(0);
const [showScore, setShowScore ] = useState(false);
const [quizTime, setQuizTime ] = useState(0);
const {
    seconds,
    minutes,
    hours,
    start,
  } = useStopwatch({ autoStart: false });
  

// Result handler function
const handleAns = (isCorrect)=>{

    if(isCorrect){
        setScore((currentNumber)=>currentNumber+1);
    }
    
    const nextQuestion = currentQuestion + 1 ; 
    if(nextQuestion<questions.length){
        setCurrentQuestion(nextQuestion);
    }
    else{
        setShowScore(true);
        setQuizTime((hours* 3600)+(minutes* 60) + (seconds));
        const quizData = {
            name : user.displayName,
            email: user.email,
            score: score + 1,
            time : (hours* 3600)+(minutes* 60) + (seconds)
        }
        fetch('https://my-quiz-app-server.vercel.app/quizresult',{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(quizData)
        }).then(res=>res.json())
        .then(data => console.log(data))
        .catch(error=>console.log(error))
        console.log(quizData);
    }

}

const {data = [], isLoading} = useQuery({
    queryKey: ['questions', "quiz"],
    queryFn: ()=> fetch('https://my-quiz-app-server.vercel.app/questions')
    .then(res => res.json())
})

console.log(data)

// quiz loader 
const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            start();
        }, 3600)
    }, [])

    if (loading) {
        return <QuizStartLoader />
    }

    if(isLoading){
        return <div className='font-3xl text-red-600'>Loading . . .</div>
    }
 
    return (
        <div className='h-screen quiz'>

            <div className='container mx-auto flex flex-col justify-center items-center'>
            <div className='flex items-center my-4'>
                <img src={logo} alt="" className='mlogo mr-2' />
                <h1 className='appName font-semibold text-2xl '>The Quizulator</h1>
            </div>
            
            {
                showScore ?  <Result questions={questions.length} score={score} time={quizTime} /> : <>
                <div className='flex justify-between w-1/2'>
                <h1 className='font-bold text-xl'>QN: <span className='text-3xl font-mono'>{currentQuestion}</span>/<span className='text-3xl font-mono'>{questions.length}</span></h1>
                
                <div className='text-3xl font-bold font-mono mb-6'><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
              </div>
                </div>
                
                <QuizQuestion question={data[currentQuestion]} handleAns={handleAns} />
                </>
            }
            </div>
        </div>
    );
};

export default QuizPage;