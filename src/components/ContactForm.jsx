import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-black text-white flex w-full items-center justify-evenly p-20'>
      <div className='w-[35%]'>
        <h1 className='text-4xl m-2'>Want to install FitSnap AI Camera in your GYM .Please submit your details below.</h1>
        <h2 className='mt-5 p-2 text-sm'>Want to install FitSnap AI Camera in your GYM ? Please submit your details below.</h2>
      </div>
      <div className='flex flex-col items-start justify-center gap-6 w-1/4'>
        <label>Name Of Gym</label>
        <input type="text" className="bg-black border-b border-white text-white focus:outline-none w-full"/>
        <label>Location</label>
        <input type="text" className="bg-black border-b border-white text-white focus:outline-none w-full"/>
        <label>Your Name</label>
        <input type="text" className="bg-black border-b border-white text-white focus:outline-none w-full"/>
        <label>Contact</label>
        <input type="text" className="bg-black border-b border-white text-white focus:outline-none w-full"/>
        <label>Email</label>
        <input type="text" className="bg-black border-b border-white text-white focus:outline-none w-full"/>
        <button className='bg-white rounded-3xl p-2  text-black text-base font-semibold px-4 py-2'>Contact Us</button>
      </div>
    </div>
  )
}

export default ContactForm
