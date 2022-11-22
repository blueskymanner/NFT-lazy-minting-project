import React from 'react'
import { useRouter } from 'next/router'
import BuildingCollectionCard from '../components/BuildingCollectionCard'
import BuildingSide from '../components/BuildingSide'
import Navbar from '../components/Navbar'

function Building() {
    const router = useRouter();
    return (
        <div>
            <Navbar owner />
            <div className='px-5 sm:px-10 xl:px-20 py-[23px]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 mb-10 cursor-pointer' onClick={() => router.push('/ownerdashboard')}>
                        <img src='left.png'></img>
                        <p className='text-[#3366CC] font-bold'>Back</p>
                    </div>
                    <div className='border-[#9E9E9E] border rounded-lg flex items-center p-1 hidden sm:flex'>
                        <img src='search.png' className='pl-4'></img>
                        <input placeholder='What are you looking for?' className='border-0 outline-none pl-2 mr-4 w-[150px] sm:w-[240px] lg:w-[300px]'></input>
                        <div className='rounded-lg bg-black px-3 sm:px-6 py-1 sm:py-2 lg:py-3 flex items-center justify-center ml-5'>
                            <p className='text-white'>Search</p>
                        </div>
                    </div>
                </div>

                <p className='text-greythree text-[24px] lg:text-[32px] mb-5'>Building Page</p>

                <div className='flex gap-[25px]'>
                    <div className='w-[0%] md:w-[30%] lg:w-[20%] xl:w-[30%] hidden md:block'>
                        <div className='flex flex-col items-start gap-3'>
                            <p className='text-xl font-bold'>Zenith</p>
                            <div className='relative'>
                                <img src='mb.png' className='rounded-lg w-full z-10'></img>
                                <div className='absolute flex gap-2 top-3 left-3 z-30'>
                                    <img src='protect.png'></img>
                                    <p className='font-bold text-sm text-white'>Protected by MVR</p>
                                </div>
                                <div className='absolute fadeOnImages w-full h-full top-0 rounded-lg z-20'>
                                </div>
                            </div>
                        </div>

                        <div className='border-2 border-[#FAFAFA] rounded-xl py-12 px-0 xl:px-8 my-8'>
                            <div className='relative mb-8'>
                                <p className='font-bold text-lg xl:text-xl mb-3 cursor-pointer'>My Collections</p>
                                <div className='bg-[#FAFAFA] rounded-3xl h-1'></div>
                                <div className='bg-black rounded-3xl absolute bottom-0 w-[148px] h-1'></div>
                            </div>
                            <div className='flex flex-col items-center pr-0 xl:pr-10'>
                                <BuildingCollectionCard protectedByMVR />
                                <BuildingCollectionCard />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[70%] lg:w-[80%] xl:w-[70%]'>
                        <BuildingSide />
                        <BuildingSide />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Building