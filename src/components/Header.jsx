import React from 'react';
import ReactPlayer from 'react-player';
import video from '../images/video.mp4';
import logo from '../images/logo.png';

const Header = () => {

    return (
        <div className='relative'>
            <div>
                <ReactPlayer
                    url={video}
                    playing
                    loop
                    width="100%"
                    height="100%"
                    muted
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-[100%] bg-black opacity-50" />

            <div className='h-16 flex items-center justify-between absolute top-0 w-full p-8 bg-[rgba(255,255,255,0.4)]'>
                <img src={logo} alt='logo' className='h-20' />
                <ul className='flex list-none gap-12 text-lg'>
                    <li className='text-blue-700 cursor-pointer'>Lorem ipsum</li>
                    <li className='cursor-pointer'>Lorem ipsum</li>
                    <li className='cursor-pointer'>Lorem ipsum</li>
                    <li className='cursor-pointer'>Lorem ipsum</li>
                </ul>
                <button className='text-blue-800 rounded-3xl border-blue-800 mr-10 border-2 pl-3 pr-3 pt-1 pb-1 hover:bg-white'>Contact us</button>
            </div>
            <div className='absolute top-1/3 text-white flex flex-col justify-center items-center w-full'>
                <h1 className='text-6xl font-bold italic'>Fitsnap for GYM</h1>
                <div className='mt-6 flex flex-col items-center text-lg'>
                    <p>Welcome to the next generation of fitness! At FitSnap, we are thrilled</p>
                    <p>to introduce the power of Artificial Intelligence(AI) to revolutionize</p>
                    <p>your gym experience</p>
                </div>
            </div>
        </div>
    )
}

export default Header
