import React from 'react'
import icon from "../assets/icon-list.svg"

export default function SucessMobile({form, onDismiss}) {
  console.log(form);
  return (
    <div className=' md:bg-dark-slate-grey md:flex md:justify-center md:items-center md:max-w-full md:h-screen'>
      <div className='mx-10 mt-24 mb-10 flex flex-col max-w-full md:bg-white md:m-0 md:w-1/2 md:h-auto md:p-8 md:rounded-xl lg:w-5/12'>
          <img src={icon} alt="" className='w-16 md:w-12' />
          <h1 className='font-semibold text-5xl py-8 md:py-4'>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to <span className='font-bold'>{form.email}</span>.
          Please open it and click the button inside to confirm your subscription.</p>
          <button className='bg-dark-slate-grey text-white mt-64 py-6 px-4 w-full rounded-xl font-semibold md:mt-8 md:w-5/6 md:self-center hover:bg-tomato' type='submit' onClick={onDismiss}>Dismiss message</button>
      </div>
    </div>
  )
}
