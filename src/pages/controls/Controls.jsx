import React from 'react'
import { AiFillPauseCircle } from 'react-icons/ai'
import { ImStop } from 'react-icons/im'
import { IoMicCircleSharp } from 'react-icons/io5'
import { BsCameraVideo } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Controls = () => {
    return (
        <div className='relative'>
            <div className='absolute top-[5rem]  left-[5rem] rounded-[4rem] bg-black text-whiteClr'>
                <div className='w-full px-[1.5rem] py-[0.4rem] flex items-center'>
                    <div className='flex items-center mr-[1rem]'>
                        <p className='text-[20px] mr-[1rem]'>00:03:45</p>
                        <div className='w-[2rem] h-[2rem] relative'>
                            <div className='absolute top-0 left-0 bg-red-600 opacity-[0.4]  w-[2rem] h-[2rem] rounded-full'></div>
                            <div className='absolute top-[0.5rem] left-[0.5rem] bg-red-600 w-[0.9rem] h-[0.9rem] rounded-full'></div>
                        </div>
                    </div>
                    <div className='w-[1px] h-[35px] bg-whiteClr mr-[1.5rem]'></div>
                    <div className='flex flex-col justify-center items-center mr-[1.5rem]'>
                        <AiFillPauseCircle className='text-[3rem] ' />
                        <div className='text-[10px]'>Pause</div>
                    </div>
                    <div className='flex flex-col justify-center items-center mr-[1.5rem]'>
                        <ImStop className='text-[3rem] ' />
                        <div className='text-[10px]'>Stop</div>
                    </div>
                    <div className='flex flex-col justify-center items-center mr-[1.5rem]'>
                        <BsCameraVideo className='text-[3rem] ' />
                        <div className='text-[10px]'>Camera</div>
                    </div>
                    <div className='flex flex-col justify-center items-center mr-[1.5rem]'>
                        <IoMicCircleSharp className='text-[3rem] ' />
                        <div className='text-[10px]'>Mic</div>
                    </div>
                    <div className=' p-[1rem] rounded-full justify-center items-center mr-[1.5rem]'>
                        <RiDeleteBin6Line className='text-[3rem] z-[1]' />
                        <div>lklk</div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Controls