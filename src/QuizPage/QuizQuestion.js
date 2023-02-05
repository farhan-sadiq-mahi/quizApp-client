import React from 'react'

const QuizQuestion = ({question , handleAns}) => {

  
  return (
    <div className='bg-blue-300 border-2 border-blue-700 rounded-md w-3/4 lg:w-3/5'>
        <h2 className='mt-6 mb-4 text-center font-serif text-2xl font-bold'>{question.Question} </h2>

        <div className='grid grid-cols-2 gap-4 p-4'>
          {
            question.ans.map(opt => <button key={opt
            .option} onClick={()=> {handleAns(opt.isCorrect)}} className='btn bg-orange-500 hover:bg-orange-600 rounded-md text-white border-none'>{opt.option}</button>)
          }
        </div>
    </div>
  )
}

export default QuizQuestion;