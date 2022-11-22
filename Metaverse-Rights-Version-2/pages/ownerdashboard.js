import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../components/Navbar'
import OwnerBuilding from '../components/OwnerBuilding'

function OwnerDB() {
    const router = useRouter()
    return (
        <div>
            <Navbar owner />
            <div className='px-5 sm:px-10 xl:px-20 py-[23px]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 mb-10 cursor-pointer' onClick={() => router.push('/')}>
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

                <p className='text-greythree text-[24px] lg:text-[32px] mb-5'>Owner Dashboard</p>

                <div className='innerShadow my-8 rounded-lg flex justify-center flex-col'>
                    <div className='py-8 flex items-end justify-center'>
                        <p className='text font-extrabold rale text-[32px] lg:text-[40px] tracking-widest my-0'>BLACKROCK</p>
                        <p className='mb-2'>&#174;</p>
                    </div>
                    <div className='bg-[#F5FBFE] flex justify-center items-center py-5'>
                        <div className='rounded-md py-3 px-6 shadowMain flex items-center justify-center gap-3 cursor-pointer shadow' onClick={() => router.push('/registerbuilding')}>
                            <img src='plus.png'></img>
                            <p className='font-bold text-sm'>Add a Building</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-end w-full mb-10'>
                    <p className='font-semibold text-lg lg:text-xl text-greythree'>Registered Buildings</p>
                </div>
                <div className='flex flex-col gap-10'>
                    <OwnerBuilding />
                    <OwnerBuilding available />
                </div>
            </div>
        </div>
    )
}

export default OwnerDB