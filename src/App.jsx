// import { useState } from 'react'
import './App.css'
import IllustrationMobile from "./assets/illustration-sign-up-mobile.svg"
import update from './component/update'
import iconlist from "./assets/icon-list.svg"

export default function App() {
  return (
    <div className=''>
      <div className='w-full'>
         <img src={IllustrationMobile} className="w-full" />
      </div>
      <div className='px-5'>
        <h1 className='text-3xl font-semibold py-5'>Stay updated!</h1>
        <p className='pb-5'>Join 60,000+ product managers receiving monthly updates on:</p>
          {update.map((updates) =>{
            return (
               <div className='flex items-start gap-2.5	pb-3'>
                 <img src = {iconlist} />
                 <p>{updates.updates}</p>
               </div>
            )}
          )}
          <form action="">
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-sl py-3 text-xs font-bold'>Email address</label>
              <input type="email"
              placeholder='email@company.com'
              className='outline-none border-grey/50 border-[1px] border-solid focus:ring-0 p-3 rounded-lg'
               />
            </div>
             <div className='flex items-center justify-center'>
               <button type="submit" className='text-white bg-charcoal-grey py-4 px-10 flex justify-center items-center whitespace-nowrap my-5 rounded-lg text-sm font-medium w-full'>
               Subscribe to monthly newsletter
               </button>
             </div>
          </form>
      </div>
    </div>
  )
}
