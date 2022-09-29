import React from 'react'
import { useCase } from '../../Data/mockdata'
const ProblemsSolutions = () => {
  const { problem } = useCase
  return (
    <div className='row mb-5'>
      {problem.map((data, index) => (
        <div className='col-md-6' key={index}>
          <p className='txt-orange fnt-16'>{data.title}</p>
          <p className='txt-primary fnt-24-fixed fnt-500'> {data.sub_title}</p>
          <p className='txt-black fnt-16'>{data.description} </p>
        </div>
      ))}
    </div>
  )
}

export default ProblemsSolutions
