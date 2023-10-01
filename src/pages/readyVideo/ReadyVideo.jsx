import React from 'react'
import { TbEdit } from 'react-icons/tb'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import { FiCopy } from 'react-icons/fi'
import logo from '../../assets/imgs/logo.png'

const ReadyVideo = () => {
    return (
        <div className='w-full'>
            <div className='w-[80%] mx-auto pt-[2rem] text-darkBlue'>
                <div className='w-full flex justify-between items-center my-[2rem]'>
                    <div className='flex items-center'>
                        <div className='w-[35px] h-[35px] mr-[1.5rem]'>
                            <img className='w-full h-full' src={logo} alt="" />
                        </div>
                        <div className='help-text text-[16px] font-semibold'>HelpMeOut</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-[18px] font-semibold mr-[1rem]'>Features</div>
                        <div className='text-[18px] font-semibold'>How it works</div>
                    </div>
                    <div>
                        <div className='text-[18px] font-semibold'>Get Started</div>
                    </div>

                </div>
                <div className='w-full flex justify-between my-[6rem]'>
                    <div className='flex-1 mr-[5rem]'>
                        <div className='w-[90%]'>

                            <h2 className='mb-[3rem] text-[3rem] font-bold text-black'>Your video is Ready!</h2>
                            <div>
                                <div className='text-[17px] text-gray-500 font-medium'>Name</div>
                                <div className='flex justify-start items-center mb-[3rem]'>
                                    <div className='text-[2.5rem] font-semibold mr-[2rem]'>untitled_video_1039849</div>
                                    <div className='text-[3rem] font-light'>
                                        <TbEdit />
                                    </div>
                                </div>
                                <div className='mb-[2rem]'>
                                    <form className='w-full  bg-gray-200 text-2xl py-[1.5rem] px-[2rem] flex justify-between items center rounded-2xl'>
                                        <input className='bg-gray-200' type='text' placeholder='enter email of receiver' />
                                        {/* <input className='bg-darkViolet p-[1rem] rounded text-whiteClr' type='submit' placeholder='send' /> */}
                                        <button className='text-whiteClr px-[1.2rem] py-[0.8rem] bg-darkViolet rounded-lg'>Send</button>
                                    </form>
                                </div>
                                <div className='w-full my-[4rem]'>
                                    <div className='text-black text-[2rem] font-semibold my-[2rem]'>Video Url</div>
                                    <div className='bg-gray-50 flex justify-between items-center my-[1rem] text-xl border border-gray-300 rounded-xl py-[1.5rem] px-[1rem]'>
                                        <div>https://www.helpmeout/Untitled_Video_20232509</div>
                                        <div className='flex items-center mr-2 border border-darkBlue px-[1.1rem] py-[0.8rem] rounded-lg'>
                                            <div className='mr-[1rem] text-[1.5rem]'>
                                                <FiCopy />
                                            </div>
                                            <div className='text-[1.5rem]'>Copy</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full my-[2rem]'>
                                    <div className='text-[1.8rem] font-semibold mb-[2rem]'>Share your video</div>
                                    <div className='flex justify-start items-center'>
                                        <div className='mr-[2rem] flex items-center border border-darkBlue rounded-lg px-[1rem] py-[0.7rem]'>
                                            <div className='text-lightBlue mr-2 text-4xl'>
                                                <BiLogoFacebookCircle />
                                            </div>
                                            <div className='text-[1.5rem] font-semibold'>Facebook</div>
                                        </div>
                                        <div className='mr-[2rem] flex items-center border border-darkBlue rounded-lg px-[1rem] py-[0.7rem]'>
                                            <div className='text-lightBlue mr-2 text-4xl'>
                                                <BiLogoFacebookCircle />
                                            </div>
                                            <div className='text-[1.5rem] font-semibold'>Facebook</div>
                                        </div>
                                        <div className='flex items-center border border-darkBlue rounded-lg px-[1rem] py-[0.7rem]'>
                                            <div className='text-lightBlue mr-2 text-4xl'>
                                                <BiLogoFacebookCircle />
                                            </div>
                                            <div className='text-[1.5rem] font-semibold'>Facebook</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2>Headache</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadyVideo