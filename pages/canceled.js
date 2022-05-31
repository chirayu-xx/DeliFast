import React from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
const canceled = () => {
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>You cancelled your order!</h2>
           
            <p className='description'>
                If you have any question
                <a className='email' href='mailto:orders@delifast.com'>
                orders@delifast.com
                </a>
            </p>
            <Link href='/'>
            <button type='button' width='300px' className='btn'>
                Continue Shopping
            </button>
            </Link>
        </div>
    </div>
  )
}

export default canceled