import React from 'react';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import video2 from '../images/video2.mp4';
import ReactPlayer from 'react-player';
import profile from '../images/profile.jpeg';
import things from '../images/things.jpeg';
import Card from './Card';
import bgrandomlines from "../images/bgrandomlines.png";
import ContactForm from './ContactForm';
import FooterSection from './FooterSection'
import { FiCheckCircle } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';
import { FaYoutube } from "react-icons/fa"; 
import curves from "../images/curves.png";
const Main = () => {
    
    return (
        <div className='flex flex-col justify-center items-center font-montserret relative z-30'>
            <div className='flex justify-evenly gap-44 mt-20 mb-28'>
                <img src={curves} alt="curved waves" className='absolute -top-40 -z-10 w-full'/>
                <div className='flex flex-col items-end gap-4'>
                    <h1 className='font-bold text-4xl'>50+</h1>
                    <p className='text-lg p-2'>GYM Enrolled</p>
                </div>
                <div className='flex flex-col items-end gap-4'>
                    <h1 className='font-bold text-4xl'>250+</h1>
                    <p className='text-lg p-2'>Users enroll</p>
                </div>
                <div className='flex flex-col items-end gap-4'>
                    <h1 className='font-bold text-4xl'>60+</h1>
                    <p className='text-lg p-2'>Workout Sessions</p>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='font-semibold text-5xl mb-4'>WHY CHOOSE FITSNAP</h1>
                <p className='text-lg pt-4 font-medium'>GET REALTIME UPDATE WITH AI</p>
            </div>

            <div className="grid grid-cols-2 w-[90%] m-10">
                {/* row1 */}
                <div>
                    <img src={image1} alt="Image 1" className="w-full h-auto" />
                </div>
                <div className="bg-[#7D8DC7] py-4 px-10 flex flex-col justify-center items-start text-white h-full">
                    <div className='w-full'>
                        <h1 className='text-6xl text-nowrap'>Enhanced Focus On <br></br>
                        Individual Needs</h1>
                    </div>
                    <div className='mt-10 text-xl'>
                        <p>FitSnap: Ditch bad form, embrace perfect</p>
                        <p>workouts. AI analyzes your moves in real-time</p>
                        <p>for flawless fitness.</p>
                    </div>
                </div>

                {/* row2 */}
                <div className="bg-[#5E9ED7] py-4 px-10 flex flex-col justify-center items-start text-white h-full">
                    <div className='w-full'>
                        <h1 className='text-6xl text-nowrap'>Data-Driven <br /> Insights</h1>
                    </div>
                    <div className='mt-10 text-xl'>
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>consectetur Lorem ipsum dolor sit</p>
                        <p>amet, consectetur</p>
                    </div>
                </div>
                <div>
                    <ReactPlayer url={video2} playing loop muted width="100%" height="100%" />
                </div>

                {/* row3 */}
                <div>
                    <img src={image2} alt="Image 3" className="w-full h-auto" />
                </div>
                <div className="bg-[#C46DA0] py-4 px-10 flex flex-col justify-center items-start text-white h-full">
                    <div className='w-full'>
                        <h1 className='text-6xl text-nowrap'>Efficient Workouts</h1>
                    </div>
                    <div className='mt-10 text-xl'>
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>consectetur Lorem ipsum dolor sit</p>
                        <p>amet, consectetur</p>
                    </div>
                </div>

                {/* row4 */}
                <div className="bg-[#69996A] py-4 px-10 flex flex-col justify-center items-start text-white h-full">
                    <div className='w-full'>
                        <h1 className='text-6xl text-nowrap'>Preventing <br /> Injuries</h1>
                    </div>
                    <div className='mt-10 text-xl'>
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>consectetur Lorem ipsum dolor sit</p>
                        <p>amet, consectetur</p>
                    </div>
                </div>
                <div>
                    <img src={image3} alt="Image 4" className="w-full h-auto" />
                </div>
            </div>

            <div className='flex flex-col items-center mt-28'>
                <h1 className='font-medium text-7xl'>LOREM IPSUM</h1>
                <p className='text-2xl p-6 font-medium'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</p>
            </div>

            <div className='bg-[#5E9ED7] flex items-center justify-evenly w-full h-[44rem] mt-5 relative overflow-hidden'>
                <img src={bgrandomlines} className='absolute right-0 h-[44rem]'/>
                <div>
                    <h1 className='text-7xl font-medium'>LOREM IPSUM,</h1>
                    <h1 className='text-7xl font-medium'>DOLOR SIT AMET,</h1>
                </div>
                <div className='z-30 bg-white p-2 rounded-md'>
                    <iframe className='rounded-md' width="560" height="315" src="https://www.youtube-nocookie.com/embed/xqvCmoLULNY?si=LbD3RKQ38lis92Wp" title="YouTube video player" frameBorder="0" allowfullscreen></iframe>
                    <p className='font-poppins mt-4'>Exercise Tutorial - Squat</p>
                    <span><FaYoutube className='text-red-500 inline'/><p className='text-gray-500 inline ml-4 text-sm font-medium'>Youtube</p></span>
                </div>
            </div>

            <div className='flex flex-col items-center mt-40 mb-11'>
                <h1 className='font-semibold text-5xl'>WHAT OUR CLIENTS SAY</h1>
                <h1 className='font-semibold text-5xl'>ABOUT US</h1>
            </div>
            <div className='flex justify-center gap-6 m-10'>
                <Card name="Riya Awasthi" image={profile} description="I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs" />
                <Card name="Riya Awasthi" image={profile} description="I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs" />
                <Card name="Riya Awasthi" image={profile} description="I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs" />
            </div>

            <div className='mb-11 mt-32'>
                <h1 className='font-semibold text-7xl'>THINGS YOU NEED</h1>
            </div>

            <div className='relative h-[1000px] w-full'>
                <img src={things} alt="things you need" className='w-full h-full object-cover' />
                <div className="absolute inset-0 bg-white bg-opacity-40"></div>
                <div className="absolute text-white flex items-center space-x-2 top-[120px] left-[307px]">
                    <span className="bg-black bg-opacity-50 px-2 py-1 rounded">Headphones</span>
                    <div className='h-1 w-32 bg-black'></div>
                    <div className="w-8 h-8 bg-black bg-opacity-40 rounded-full flex justify-center items-center"> <div className="w-4 h-4 bg-black rounded-full"></div></div>
                </div>
                <div className="absolute text-white flex items-center space-x-2 bottom-4 left-[250px]">
                    <span className="bg-black bg-opacity-50 px-2 py-1 rounded">Fitness Band</span>
                    <div className='h-1 w-32 bg-black'></div>
                    <div className="w-8 h-8 bg-black bg-opacity-40 rounded-full flex justify-center items-center"> <div className="w-4 h-4 bg-black rounded-full"></div></div>
                </div>
                <div className="absolute text-white flex items-center space-x-2 bottom-72 right-[327px]">
                    <span className="bg-black bg-opacity-50 px-2 py-1 rounded">A Tab With FitSnap</span>
                    <div className='h-1 w-32 bg-black'></div>
                    <div className="w-8 h-8 bg-black bg-opacity-40 rounded-full flex justify-center items-center"> <div className="w-4 h-4 bg-black rounded-full"></div></div>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='sm:4xl md:text-6xl lg:text-[7rem] font-extralight tracking-widest italic mt-4'>REVOLUTIONIZE YOU</h1>
                <h1 className='text-7xl p-4 mt-20 font-medium'>LOREM IPSUM</h1>
            </div>
            <div className='flex items-center w-full justify-evenly mt-16 mb-24'>
                <div className='w-1/4 p-8 ml-24 border-blue-700 border-2 rounded-lg'>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>24*7 AI Trainer<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Unlimited Access<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>150+ Exercise<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Customized Plans<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Advanced AI Camera<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Voice Feedback<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Complete Plans<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Real Time Feedback<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Rep Counter<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Saved Workout Videos<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Activity History<FiCheckCircle className='text-blue-900'/></p>
                    <p className='flex items-center w-full justify-between p-1 font-semibold'>Voice Commands<FiCheckCircle className='text-blue-900'/></p>
                </div>
                <div className='w-1/3'>
                    <p className='text-2xl font-medium'>To Benefit From All The Features Of Fitsnap, The Ideal Tablet, Featuring 8GB RAM And An Immersive 11-Inch Screen, Should Offer A Balance Of Performance And Display Quality.     </p>
                    <button className='flex mt-6 items-center text-blue-800 rounded-3xl border-blue-800 mr-10 border-2 pl-3 pr-3 pt-2 pb-2 hover:bg-white font-semibold'>Download Brochure <GoArrowUpRight /></button>
                </div>
            </div>
            <ContactForm />
            <FooterSection />
        </div>
    );
};

export default Main;
