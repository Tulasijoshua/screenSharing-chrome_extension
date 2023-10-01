import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import logo from '../../assets/imgs/logo.png'
import roundTick from './assets/round-tick.png'
import star from './assets/star.png'
import helper from './assets/helper.png'

const Help = () => {
    return (
        <div className='w-full'>
            <div className='w-[80%] mt-[7rem] mx-auto'>
                <div className='pb-[4rem] w-full border-b-2 border-gray-200 flex justify-between items-start'>
                    <div className='mr-1rem flex '>
                        <div className='w-[60px] h-[60px] mt-[1rem] mr-[1rem]'>
                            <img className='w-full h-full object-cover' src={logo} />
                        </div>
                        <div>
                            <h2 className='text-[40px] font-[600]'>HelpMeOut</h2>
                            <div className='flex justify-start gap-3 items-start mb-[2rem]'>
                                <div className='mr-[1rem] flex items-center'>
                                    <div className='w-[20px] h-[20px] mr-[1rem]'>
                                        <img className='w-full h-full' src={roundTick} alt="" />
                                    </div>
                                    <div className='text-[20px] text-lightBlue font-semibold'>Helpmeout.com</div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-[20px] h-[20px] mr-[1rem]'>
                                        <img className='w-full h-full' src={roundTick} alt="" />
                                    </div>
                                    <div className='text-[20px] text-lightBlue font-semibold'>Featured</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex gap-2 items-center'>
                                    <div className='w-[24px] h-[24px]'>
                                        <img className='w-full h-full object-cover' src={star} alt="" />
                                    </div>
                                    <div className='w-[24px] h-[24px]'>
                                        <img className='w-full h-full object-cover' src={star} alt="" />
                                    </div>
                                    <div className='w-[24px] h-[24px]'>
                                        <img className='w-full h-full object-cover' src={star} alt="" />
                                    </div>
                                    <div className='w-[24px] h-[24px]'>
                                        <img className='w-full h-full object-cover' src={star} alt="" />
                                    </div>
                                    <div className='w-[24px] h-[24px]'>
                                        <img className='w-full h-full object-cover' src={star} alt="" />
                                    </div>

                                </div>
                                <div className='text-[18px]'>252</div>
                                <div className='w-[20px] h-[20px] mr-[1rem]'>
                                    <img className='w-full h-full' src={roundTick} alt="" />
                                </div>
                                <div className='w-[2px] h-[20px] bg-gray-400'></div>
                                <div className='text-[18px] text-lightBlue'>Productivity</div>
                                <div className='w-[2px] h-[20px] bg-gray-400'></div>
                                <div className='text-[18px] text-gray-600'>8000+</div>
                                <div className='text-[18px] text-gray-600'>users</div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <button className='text-whiteClr bg-lightBlue py-[1rem] px-[2rem] text-2xl font-[400] rounded-lg'>Add to chrome</button>
                    </div>
                </div>
                <div className='flex justify-center items-center my-[3rem] gap-[2rem]'>
                    <div className='py-[12px] px-[16px] hover:shadow-md text-[20px] font-semibold text-gray-600  rounded-[24px] hover:text-lightBlue'>Overview</div>
                    <div className='py-[12px] px-[16px] hover:shadow-md text-[20px] font-semibold text-gray-600  rounded-[24px] hover:text-lightBlue'>Property Practices</div>
                    <div className='py-[12px] px-[16px] hover:shadow-md text-[20px] font-semibold text-gray-600  rounded-[24px] hover:text-lightBlue'>Review</div>
                    <div className='py-[12px] px-[16px] hover:shadow-md text-[20px] font-semibold text-gray-600  rounded-[24px] hover:text-lightBlue'>Related</div>
                </div>
            </div>
            <div className='w-full bg-gray-200'>
                <div className='w-[80%] mx-auto pt-[4rem] flex justify-between items-center'>
                    <div className='p-5 text-[3rem] rounded-full bg-whiteClr'>
                        <BsChevronLeft />
                    </div>
                    <div className='w-[85%]'>
                        <img className='w-full' src={helper} alt="" />
                    </div>
                    <div className='p-5 text-[3rem] rounded-full bg-whiteClr'>
                        <BsChevronRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help