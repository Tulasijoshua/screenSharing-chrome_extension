import React from 'react'
import { FiSettings, FiMonitor } from 'react-icons/fi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import logo from '../../assets/imgs/logo.png'
import screen from './assets/screen.png'
import videoIcon from './assets/video.png'
import audioIcon from './assets/audio.png'

const Popup = () => {
    return (
        <div className='w-[300px] p-[2rem] rounded-[2.5rem] shadow-lg text-darkBlue'>
            <div className='w-full flex justify-between'>
                <div className='flex justify-start'>
                    <div className='w-[25px] h-[25px] mr-3'>
                        <img className='w-full h-full' src={logo} alt="Logo" />
                    </div>
                    <h2 className='text-[18px] font-bold help-text'>HelpMeOut</h2>
                </div>
                <div className='flex items-center justify-end '>
                    <div className='text-3xl mr-[1.5rem]'>
                        <FiSettings />
                    </div>
                    <div className='text-3xl'>
                        <AiOutlineCloseCircle />
                    </div>
                </div>
            </div>
            <div className='my-[2rem] text-[15px] leading-tight text-darkBlue'>
                <p>
                    This extension helps you record and share help videos with ease.
                </p>
            </div>
            <div className='w-[80%]  mx-auto'>
                <div className='text-[3rem] text-gray-400'>
                    <FiMonitor className='ml-[2rem]' />
                    <div className='text-[15px]'>Full screen</div>
                </div>
                <div className='relative'>
                    <img className='w-[18px h-18px] absolute -top-[5.5rem] right-[2.5rem]' src={screen} alt="" />
                    <img className='w-[18px h-18px] absolute -top-[4.8rem] right-[3.3rem] bg-whiteClr' src={screen} alt="" />
                    <div className='absolute -top-[2.5rem] right-[0.3rem] text-[1.5rem] font-semibold'>Current tab</div>
                </div>
            </div>
            <div className='border-darkBlue border-2 p-5 rounded-[1.3rem] my-[2.5rem] flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='mr-3'>
                        <img className='' src={videoIcon} alt="" />
                    </div>
                    <div className='text-2xl font-medium'>Camera</div>
                </div>
                <div className='relative bg-darkBlue px-[2rem] py-[1rem] rounded-3xl cursor-pointer'>
                    <div className='absolute top-[2px] right-1 bg-whiteClr p-[0.8rem] rounded-full '></div>
                </div>
            </div>
            <div className='border-darkBlue border-2 p-5 rounded-[1.3rem] mb-[2.5rem] flex justify-between items-center '>
                <div className='flex items-center'>
                    <div className='mr-3'>
                        <img className='' src={audioIcon} alt="" />
                    </div>
                    <div className='text-2xl font-medium'>Audio</div>
                </div>
                <div className='relative bg-darkBlue px-[2rem] py-[1rem] rounded-3xl cursor-pointer'>
                    <div className='absolute top-[2px] right-1 bg-whiteClr p-[0.8rem] rounded-full '></div>
                </div>
            </div>
            <div className='bg-darkBlue text-center p-5 rounded-[1.3rem] mb-[2.5rem] cursor-pointer'>
                    <div className='text-2xl font-medium text-whiteClr '>Start Recording</div>
            </div>
        </div>
    )
}

export default Popup