import React from 'react'

const Card = ({ name, image, description }) => {
    return (
        <div className='border-2 border-blue-800 flex flex-col w-[28%] p-10 justify-between h-[25rem] font-medium'>
            <div className='text-base font-medium mt-2'>
                {description}
            </div>
            <div className='flex items-center gap-4'>
                <img src={image} alt="profile" className='rounded-full h-10' />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Card
