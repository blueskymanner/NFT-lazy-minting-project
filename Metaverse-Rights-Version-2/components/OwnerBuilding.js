import React from 'react'
import { useRouter } from 'next/router'

function OwnerBuilding({ available }) {

    const router = useRouter()
    return (
        <div className='mainShadow flex p-[30px] gap-5 rounded-xl flex-wrap lg:flex-nowrap items-center cursor-pointer' onClick={() => router.push('/building')}>
            <div className='w-full md:w-5/12 lg:w-3/12 relative'>
                <img src='bb1.png' className='fadeOnImages rounded-lg bg-cove w-full md:w-[290px]'></img>
                <div className='absolute flex gap-2 top-3 left-3 z-10'>
                    <img src='protect.png' />
                    <p className='font-bold text-sm text-white'>Protected by MVR</p>
                </div>
                <div className='absolute fadeOnImages w-[290px] top-0 rounded-lg' />
            </div>
            <p className='text-black font-bold text-md block md:hidden'>Rocky Balboa Tower</p>

            <div className='w-6/12 lg:w-4/12 flex flex-col items-start gap-5 hidden md:block'>
                <div className='flex flex-col items-start justify-start gap-2'>
                    <p className='text-greythree font-bold text-sm'>Name</p>
                    <p className='text-black font-bold text-md'>Rocky Balboa Tower</p>
                </div>
                <div className='flex flex-col items-start justify-start gap-2'>
                    <p className='text-greythree font-bold text-sm'>Location</p>
                    <p className='text-black font-bold text-md h-max max-w-[220px]'>2118 Thornridge Cir. Syracuse,
                        Connecticut 35624</p>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col items-start justify-between gap-2'>
                        <p className='text-greythree font-bold text-sm'>Total Share Vaue</p>
                        <p className='text-[#2196F3] font-bold text-md'>$13.2M/<span className='text-greythree'>yr</span></p>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-2'>
                        <p className='text-greythree font-bold text-sm'>Total Share Revenue</p>
                        <p className='text-[#2196F3] font-bold text-md'>$7.7M</p>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-2'>
                        <p className='text-greythree font-bold text-sm'>Active Secondary <br></br>
                            Auction Sale</p>
                        <p className='text-[#2196F3] font-bold text-md'>$7.7M</p>
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-5/12 flex flex-col md:flex-row lg:flex-col items-start md:items-center lg:items-start lg:items-end justify-between gap-2'>
                <div className='flex-col items-start justify-start gap-5 w-full md:w-7/12 lg:w-auto hidden sm:flex'>
                    <p className='text-black font-semibold text-sm'>Licensing Region</p>
                    {
                        available ?
                            <div className='flex flex-wrap gap-[30px] items-center'>

                                <div className='relative rounded-xl cursor-pointer'>
                                    <div className='z-10 absolute left-2 bottom-2 px-2 py-[3px] rounded-lg flex items-center justify-center blurShadow2'>
                                        <p className='text-[#00E676]  text-[10px]'>Available</p>
                                    </div>
                                    <img src='bs1.png' className='m-0 p-[2px] rounded-xl w-[100px] '></img>
                                </div>
                                <div className='relative rounded-xl cursor-pointer'>
                                    <div className='z-10 absolute left-2 bottom-2 px-2 py-[3px] rounded-lg flex items-center justify-center blurShadow2'>
                                        <p className='text-[#D50000]  text-[10px]'>Unavailable</p>
                                    </div>
                                    <img src='bs2.png' className='m-0 p-[2px] rounded-xl w-[100px] '></img>
                                </div>
                                <div className='relative rounded-xl cursor-pointer'>
                                    <div className='z-10 absolute left-2 bottom-2 px-2 py-[3px] rounded-lg flex items-center justify-center blurShadow2'>
                                        <p className='text-[#D50000]  text-[10px]'>Unavailable</p>
                                    </div>
                                    <img src='bs3.png' className='m-0 p-[2px] rounded-xl w-[100px] '></img>
                                </div>
                                <div className='relative rounded-xl cursor-pointer'>
                                    <div className='z-10 absolute left-2 bottom-2 px-2 py-[3px] rounded-lg flex items-center justify-center blurShadow2'>
                                        <p className='text-[#D50000]  text-[10px]'>Unavailable</p>
                                    </div>
                                    <img src='bs4.png' className='m-0 p-[2px] rounded-xl w-[100px] '></img>
                                </div>

                            </div>
                            :
                            <div className='flex flex-wrap gap-[10px] xl:gap-[30px] items-center'>
                                <img src='bs1.png' className='w-[100px] rounded-lg'></img>
                                <img src='bs2.png' className='w-[100px] rounded-lg'></img>
                                <img src='bs3.png' className='w-[100px] rounded-lg'></img>
                                <img src='bs4.png' className='w-[100px] rounded-lg'></img>
                            </div>
                    }
                </div>

                <div className='flex flex-col sm:flex-row justify-center sm:justify-end lg:justify-start my-5 items-center gap-x-5 gap-y-2 flex-nowrap sm:flex-wrap w-full md:w-5/12 lg:w-auto'>
                    <div className='flex border-greythree border-2 bg-white items-center justify-center h-[48px] w-full sm:w-[160px] lg:w-[210px] px-2 py-4 gap-2 rounded cursor-pointer z-20 text-sm lg:text-base'>
                        <img src='plus.png'></img>
                        <p className='text-black font-semibold'>Licensing Region</p>
                    </div>
                    <div className='flex bg-black items-center border-black border-2 h-[48px] justify-center w-full sm:w-[160px] lg:w-[210px] px-2  py-4 gap-2 rounded cursor-pointer z-20 text-sm lg:text-base'>
                        <img src='tupp.png' className='h-4 w-4' />
                        <p className='text-white font-semibold'>View Performance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerBuilding