import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards.jsx'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='md:text-4xl text-2xl'>We are delighted to have you <span className='text-pink-600'>Here :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum, fugit alias qui maxime numquam? Officia, similique repellat! Nostrum similique repellat ipsam beatae voluptate optio qui recusandae aliquid, eum quae?</p>
          <Link to='/'>
          <button className='mt-6 bg-pink-600 px-4 py-2 text-white rounded-xl hover:bg-pink-800 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Course