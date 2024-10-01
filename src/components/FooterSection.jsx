import React from 'react'
import logo from '../images/logo.png'
import { TiSocialFacebook, TiSocialYoutube, } from "react-icons/ti";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const FooterSection = () => {
  return (
    <div className='flex items-center justify-evenly bg-black w-full text-white pb-28'>
      <div className='relative flex flex-col  items-start w-1/4'>
        <img src={logo} alt="logo" className='h-16 mb-6 ml-2' />
        <h1 className='text-4xl ml-4 mb-4 font-semibold'>Get Fitsnap</h1>
        <p className='ml-4 text-sm'>Be the first to test the first AI personal trainer, ever! Keep up to
          date with the launch, new workouts and further details by joining
          our mailing list.</p>
        <div className='flex gap-4 ml-3 mt-4'>
          <p className='cursor-pointer'><TiSocialFacebook /></p> 
          <p className='cursor-pointer'><TiSocialYoutube /></p>
          <p className='cursor-pointer'><SlSocialLinkedin /></p>
          <p className='cursor-pointer'><SlSocialInstagram /></p>
        </div>
      </div>

      <div className='flex flex-col gap-10 w-1/5'>
        <div>
          <p className='font-semibold mb-2'>Download the app</p>
          <p className='mb-2'>Android - Google Play Store</p>
          <p className='mb-2'>iOS - Apple App Store</p>
        </div>
        <div>
          <p className='font-semibold m-1'>Contact</p>
          <p className='m-1'>Etiam consequat sem ullamcorper, euismodmetus sit </p>
          <p className='m-1'>+91 0000000000</p>
        </div>
      </div>

      <div>
        <p className='m-1 font-semibold'>Company</p>
        <p className='m-1'>About Us</p>
        <p className='m-1'>Terms & Conditions</p>
        <p className='m-1'>Privacy Policy</p>
        <p className='m-1'>Community Guidelines</p>
      </div>
    </div>
  )
}

export default FooterSection
