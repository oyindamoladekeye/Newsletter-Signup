import { useState } from 'react'
import './App.css'
import IllustrationMobile from "./assets/illustration-sign-up-mobile.svg"
import update from './component/update'
import iconlist from "./assets/icon-list.svg"
import IllustrationDesktop from "./assets/illustration-sign-up-desktop.svg"
import SucessMobile from './component/SucessMobile'
import { useFormik } from 'formik';


export default function App() {
  const [showThankYou , setShowThankYou] = useState(false)
  const validate = (values) =>{
    const errors = {};
    if(!values.email){
      errors.email = "Email Required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = "Valid Email Required";
    }
    return errors;
  }
  const onSubmit = (values,{ resetForm }) => {
    setShowThankYou(true);
    console.log(values);
  };
  const handleDismiss = () => {
    setShowThankYou(false);
    resetForm();
  };

  const formik= useFormik({
    initialValues:{
      email:"",
    },
    onSubmit,
    validate,

  });
  return (
    <div className='lg:bg-dark-slate-grey lg:h-screen lg:flex lg:justify-center lg:items-center'>
      {!showThankYou ? (
      <div className='lg:flex lg:flex-row-reverse lg:bg-white lg:w-3/5 lg:rounded-2xl lg:px-5 lg:py-3'>
        <div>
           <img src={IllustrationMobile} className="w-full lg:hidden"/>
           <img src={IllustrationDesktop} className="hidden lg:block lg:h-full"/>
        </div>
        <div className='px-5 lg:flex lg:flex-col lg:justify-center lg:pr-10'>
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
            <form onSubmit={formik.handleSubmit}>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <label htmlFor="email" className='py-3 text-xs font-bold'>Email address</label>
                {formik.touched.email && formik.errors.email ? (
                  <p className='py-3 text-xs font-bold text-red-600'>{formik.errors.email}</p>
                ) : null}
                </div>
                <input 
                type="text"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder={!formik.touched.email ? 'email@company.com' : null}
                className={`outline-none border-grey/50 border-[1px] border-solid focus:ring-0 p-3 rounded-lg text-semibold ${formik.errors.email && formik.touched.email && "bg-red-100 border-red-400 text-red-400"}`}
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
      ) : (<SucessMobile  onDismiss={handleDismiss} form={formik.values}/>)}
    </div>
  )
}
