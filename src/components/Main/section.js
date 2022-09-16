import React from 'react'
import img from '../../img/img.svg'
const section = () => {
  return (
    <div className='pt-10'>
        <img src={img} alt="Facebook" className='w-30 mx-auto md:mx-0 md:w-290px md:-mb-4 md:-ml-8' />
        <p className='hidden  md:flex text-subtitle leading-8 w-500px pr-6 '>O facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida</p>
    </div>
  )
}

export default section