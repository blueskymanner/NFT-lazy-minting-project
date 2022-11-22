import React, { useState } from 'react'
import { useRouter } from 'next/router';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import Navbar from '../components/Navbar'

function Browse() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    const [first, setfirst] = useState('categories')

    const router = useRouter()

    return (
        <div className='w-full'>
            <Navbar browse />
            <div className='px-4 sm:px-10 lg:px-20 py-[60px] w-full'>
                <div className='flex flex-row items-center relative justify-between'>
                    <div className={`${first === 'categories' ? 'w-full sm:w-1/2 lg:w-8/12' : 'w-full sm:w-1/2'} relative  ease-in-out duration-300`}>
                        <p onClick={() => { setfirst('categories') }} className={`${first === 'categories' ? 'text-black ' : 'text-greyfour '} text-md font-bold cursor-pointer px-2 sm:px-8`}>Browse by Categories</p>
                        {
                            first === 'categories' &&
                            <div className={`absolute z-10 h-1 rounded-tr-3xl rounded-tl-3xl bg-black top-9  ease-in-out duration-300 left-0 w-[180px] sm:w-[219px]`}></div>
                        }
                    </div>
                    <div className={`${first === 'categories' ? 'w-full sm:w-1/2 lg:w-3/12' : 'w-full sm:w-1/2'} relative  ease-in-out duration-300`}>
                        <p onClick={() => { setfirst('map') }} className={`${first === 'map' ? 'text-black ' : 'text-greyfour '} text-2md font-bold cursor-pointer px-2 sm:px-8`}>Browse by Map</p>
                        {
                            first === 'map' &&
                            <div className={`absolute z-10 h-1 rounded-tr-3xl rounded-tl-3xl bg-black top-9 right-3 left-0 sm:right-auto w-[150px] sm:w-[182px]`}></div>
                        }
                    </div>
                    <div className='absolute h-1 bg-[#FAFAFA] top-9 w-full'></div>
                </div>

                <div className='flex gap-10 px-5 py-[10px] shadow-md my-10 items-center w-fit rounded-[4px]'>
                    <p className='text-grey four font-semibold text-sm'>Sort by most popular</p>
                    <Icon icon="bx:menu-alt-left" color="#757575" width="24" height="24" />
                </div>

                <div className={`flex ${first === 'categories' ? 'flex-col' : 'flex-col-reverse'} md:flex-row relative gap-8`}>
                    <div className={`${first === 'categories' ? 'md:w-1/2 lg:w-9/12' : 'md:w-1/2'} w-full relative  ease-in-out duration-300`}>
                        <div className='flex flex-wrap gap-6 py-4 justify-between'>
                            <div className='shadow-md px-2 flex flex-col w-full sm:w-[280px] rounded-lg blueShadow'>
                                <div className='flex justify-between items-center py-2 px-3'>
                                    <div className='flex items-center justify-center p-1 border border-greythree rounded-[4px] h-[30px] w-[30px]'>
                                        <Icon icon="carbon:share" color="#757575" width="30" height="30" />
                                    </div>
                                    <div className='flex items-center justify-center py-2 px-3 gap-2 border border-greythree rounded-[4px]'>
                                        <Icon icon="ant-design:clock-circle-outlined" color="#757575" width="16" height="16" />
                                        <p className='text-greythree font-bold text-md'>03:21:12</p>
                                    </div>
                                </div>
                                <div className='py-2 w-full'>
                                    <img src='room1.png' className='w-full' />
                                </div>
                                <div className='flex flex-col justify-between items-stretch gap-2 relative'>
                                    <p className='font-bold text-sm px-2'>Current Bid</p>
                                    <div className='w-full flex justify-between pb-3 px-2'>
                                        <p className='text-md text-[#269DFF] font-bold'>12,000 <span className='text-greyfour'>USD</span></p>
                                        <p className='text-[#269DFF] text-sm font-semibold'>mrStudio</p>
                                    </div>
                                    <div className='absolute right-2 -top-8'>
                                        <img src='boy.png' className='rounded-full' />
                                    </div>
                                </div>
                            </div>


                            <div className='shadow-md px-2 flex flex-col w-full sm:w-[280px] rounded-lg blueShadow'>
                                <div className='flex justify-between items-center py-2 px-3'>
                                    <div className='flex items-center justify-center p-1 border border-greythree rounded-[4px] h-[30px] w-[30px]'>
                                        <Icon icon="carbon:share" color="#757575" width="30" height="30" />
                                    </div>
                                    <div className='flex items-center justify-center py-2 px-3 gap-2 border border-greythree rounded-[4px]'>
                                        <Icon icon="ant-design:clock-circle-outlined" color="#757575" width="16" height="16" />
                                        <p className='text-greythree font-bold text-md'>03:21:12</p>
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <img src='room2.png' className='w-full' />
                                </div>
                                <div className='flex flex-col justify-between items-stretch gap-2 relative'>
                                    <p className='font-bold text-sm px-2'>Current Bid</p>
                                    <div className='w-full flex justify-between pb-3 px-2'>
                                        <p className='text-md text-[#269DFF] font-bold'>12,000 <span className='text-greyfour'>USD</span></p>
                                        <p className='text-[#269DFF] text-sm font-semibold'>mrStudio</p>
                                    </div>
                                    <div className='absolute right-2 -top-8'>
                                        <img src='boy.png' className='rounded-full'></img>
                                    </div>
                                </div>
                            </div>

                            <div className='shadow-md px-2 flex flex-col w-full sm:w-[280px] rounded-lg blueShadow'>
                                <div className='flex justify-between items-center py-2 px-3'>
                                    <div className='flex items-center justify-center p-1 border border-greythree rounded-[4px] h-[30px] w-[30px]'>
                                        <Icon icon="carbon:share" color="#757575" width="30" height="30" />
                                    </div>
                                    <div className='flex items-center justify-center py-2 px-3 gap-2 border border-greythree rounded-[4px]'>
                                        <Icon icon="ant-design:clock-circle-outlined" color="#757575" width="16" height="16" />
                                        <p className='text-greythree font-bold text-md'>03:21:12</p>
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <img src='room3.png' className='w-full' />
                                </div>
                                <div className='flex flex-col justify-between items-stretch gap-2 relative'>
                                    <p className='font-bold text-sm px-2'>Current Bid</p>
                                    <div className='w-full flex justify-between pb-3 px-2'>
                                        <p className='text-md text-[#269DFF] font-bold'>12,000 <span className='text-greyfour'>USD</span></p>
                                        <p className='text-[#269DFF] text-sm font-semibold'>mrStudio</p>
                                    </div>
                                    <div className='absolute right-2 -top-8'>
                                        <img src='boy.png' className='rounded-full'></img>
                                    </div>
                                </div>
                            </div>

                            <div className='shadow-md px-2 flex flex-col w-full sm:w-[280px] rounded-lg blueShadow'>
                                <div className='flex justify-between items-center py-2 px-3'>
                                    <div className='flex items-center justify-center p-1 border border-greythree rounded-[4px] h-[30px] w-[30px]'>
                                        <Icon icon="carbon:share" color="#757575" width="30" height="30" />
                                    </div>
                                    <div className='flex items-center justify-center py-2 px-3 gap-2 border border-greythree rounded-[4px]'>
                                        <Icon icon="ant-design:clock-circle-outlined" color="#757575" width="16" height="16" />
                                        <p className='text-greythree font-bold text-md'>03:21:12</p>
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <img src='room4.png' className='w-full' />
                                </div>
                                <div className='flex flex-col justify-between items-stretch gap-2 relative'>
                                    <p className='font-bold text-sm px-2'>Current Bid</p>
                                    <div className='w-full flex justify-between pb-3 px-2'>
                                        <p className='text-md text-[#269DFF] font-bold'>12,000 <span className='text-greyfour'>USD</span></p>
                                        <p className='text-[#269DFF] text-sm font-semibold'>mrStudio</p>
                                    </div>
                                    <div className='absolute right-2 -top-8'>
                                        <img src='boy.png' className='rounded-full'></img>
                                    </div>
                                </div>
                            </div>


                            <div className='shadow-md px-2 flex flex-col w-full sm:w-[280px] rounded-lg blueShadow cursor-pointer'>
                                <div className='flex justify-between items-center py-2 px-3'>
                                    <div className='flex items-center justify-center p-1 border border-greythree rounded-[4px] h-[30px] w-[30px]'>
                                        <Icon icon="carbon:share" color="#757575" width="30" height="30" />
                                    </div>
                                    <div className='flex items-center justify-center py-2 px-3 gap-2 border border-greythree rounded-[4px]'>
                                        <Icon icon="ant-design:clock-circle-outlined" color="#757575" width="16" height="16" />
                                        <p className='text-greythree font-bold text-md'>03:21:12</p>
                                    </div>
                                </div>
                                <div className='py-2' onClick={() => router.push('/nft')}>
                                    <img src='room5.png' className='w-full' />
                                </div>
                                <div className='flex flex-col justify-between items-stretch gap-2 relative'>
                                    <p className='font-bold text-sm px-2'>Current Bid</p>
                                    <div className='w-full flex justify-between pb-3 px-2'>
                                        <p className='text-md text-[#269DFF] font-bold'>12,000 <span className='text-greyfour'>USD</span></p>
                                        <p className='text-[#269DFF] text-sm font-semibold'>mrStudio</p>
                                    </div>
                                    <div className='absolute right-2 -top-8'>
                                        <img src='boy.png' className='rounded-full'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${first === 'categories' ? 'md:w-1/2 lg:w-4/12' : 'md:w-1/2'} w-full relative  ease-in-out duration-300`}>
                        <div className='h-[500px] md:h-screen w-full'>
                            <GoogleMapReact
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Browse