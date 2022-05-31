import React, {useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import {runFireworks} from '../lib/utils'
import {useStateContext} from '../context/StateContext'
const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    },[])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon1'>
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for order!</h2>
            <p className='email-msg'>Check your email inbox for the receipt.</p>
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

export default Success