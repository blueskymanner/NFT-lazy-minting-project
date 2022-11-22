import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import images from '../assets'
import DropDown from './DropDown'

function Navbar({ home, register, browse, nft, owner, walletAddress }) {

    const [localWalletAddress, setLocalWalletAddress] = useState('');
    useEffect(() => {
        setLocalWalletAddress(localStorage.getItem('walletAddress'))
    }, [])
    const router = useRouter();

    if (owner) {
        return (
            <div className='flex justify-center flex-col items-center'>
                <div className='flex w-full items-center justify-between px-5 sm:px-10 lg:px-20 pt-5 relative'>
                    <Link href='/'>
                        <Image width={"50px"} height={"50px"} src={images.logo} alt='' className="cursor-pointer" />
                    </Link>
                    <div className='flex gap-1'>
                        <div className='flex bg-black items-center px-4 sm:px-8 py-2 sm:py-4 gap-2 rounded cursor-pointer z-20 '>
                            <Image width={"16px"} height={"16px"} alt='' src={images.walletwhite} />
                            <p className='text-white font-semibold'>Connect wallet</p>
                        </div>
                    </div>
                </div>
                <div className='border-[#9E9E9E] border rounded-sm flex items-center p-0.5 black sm:hidden w-max sm:w-auto'>
                    <img src='search.png' className='pl-4'></img>
                    <input placeholder='What are you looking for?' className='border-0 outline-none pl-2 mr-4 w-[160px] md:w-[300px]'></input>
                    <div className='rounded-sm bg-black px-4 md:px-6 py-2 md:py-3 flex items-center justify-center ml-5'>
                        <p className='text-white'>Search</p>
                    </div>
                </div>
            </div>
        )
    }

    if (browse) {
        return (
            <div className='flex justify-center flex-col items-center'>
                <div className='flex w-full items-center justify-between px-5 sm:px-10 lg:px-20 pt-5 relative'>
                    <Link href='/'>
                        <Image width={"50px"} height={"50px"} src={images.logo} alt='' className="cursor-pointer" />
                    </Link>
                    <div className='border-[#9E9E9E] border rounded-sm items-center p-0.5 hidden sm:flex'>
                        <img src='search.png' className='pl-4'></img>
                        <input placeholder='What are you looking for?' className='border-0 outline-none pl-2 mr-4 w-[160px] md:w-[300px]'></input>
                        <div className='rounded-sm bg-black px-4 md:px-6 py-2 md:py-3 flex items-center justify-center ml-5'>
                            <p className='text-white'>Search</p>
                        </div>
                    </div>

                    <div className='flex gap-1'>
                        <div className='flex bg-black items-center px-4 sm:px-8 py-2 sm:py-4 gap-2 rounded cursor-pointer z-20 '>
                            <Image width={"16px"} height={"16px"} alt='' src={images.walletwhite} />
                            <p className='text-white font-semibold'>Connect wallet</p>
                        </div>
                    </div>
                </div>
                <div className='border-[#9E9E9E] border rounded-sm flex items-center p-0.5 black sm:hidden w-max sm:w-auto'>
                    <img src='search.png' className='pl-4'></img>
                    <input placeholder='What are you looking for?' className='border-0 outline-none pl-2 mr-4 w-[160px] md:w-[300px]'></input>
                    <div className='rounded-sm bg-black px-4 md:px-6 py-2 md:py-3 flex items-center justify-center ml-5'>
                        <p className='text-white'>Search</p>
                    </div>
                </div>
            </div>
        )
    }

    if (nft) {
        return (
            <div className='flex justify-center flex-col items-center'>
                <div className='flex w-full items-center justify-between px-5 sm:px-10 lg:px-20 pt-5 relative'>
                    <Link href='/'>
                        <Image width={"50px"} height={"50px"} src={images.logo} alt='' className="cursor-pointer" />
                    </Link>
                    <div className='border-[#9E9E9E] border rounded-sm items-center p-0.5 hidden sm:flex'>
                        <img src='search.png' className='pl-4'></img>
                        <input placeholder='What are you looking for?' className='border-0 outline-none pl-2 mr-4 w-[160px] md:w-[300px]'></input>
                        <div className='rounded-sm bg-black px-4 md:px-6 py-2 md:py-3 flex items-center justify-center ml-5'>
                            <p className='text-white'>Search</p>
                        </div>
                    </div>

                    <div className='flex gap-1' onClick={() => router.push('/portfolio')}>
                        <div className='flex bg-black items-center px-4 sm:px-8 py-2 sm:py-4 gap-2 rounded cursor-pointer z-20 '>
                            <p className='text-white font-semibold'>0x983...a9f3</p>
                        </div>
                    </div>
                </div>
                <div className='border-[#9E9E9E] border rounded-sm flex items-center p-0.5 black sm:hidden w-max sm:w-auto'>
                    <img src='search.png' className='pl-4'></img>
                    <input placeholder='What are you looking for?' className='border-0 outline-none pl-2 mr-4 w-[160px] md:w-[300px]'></input>
                    <div className='rounded-sm bg-black px-4 md:px-6 py-2 md:py-3 flex items-center justify-center ml-5'>
                        <p className='text-white'>Search</p>
                    </div>
                </div>
            </div>
        )
    }

    if (home) {
        return (
            <div className='flex w-full items-center justify-between px-5 sm:px-10 lg:px-20 pt-5 relative'>
                <Link href='/'>
                    <Image width={"50px"} height={"50px"} src={images.logo} alt='' className="cursor-pointer" />
                </Link>
                <div className='gap-[60px] z-20 hidden md:flex'>
                    <div className='relative flex justify-center'>
                        <p className='text-black font-semibold cursor-pointer'>Home </p>
                        <div className='absolute w-[36%] h-[4px] rounded-2xl bg-black bottom-[-8px]'></div>
                    </div>
                    <Link href='/browse'>
                        <p className='text-greyfive font-semibold cursor-pointer'>Explore</p>
                    </Link>
                    <p className='text-greyfive font-semibold cursor-pointer'>About us</p>
                </div>
                <div className='flex gap-1'>
                    <div className='flex bg-black items-center px-4 sm:px-8 py-2 sm:py-4 gap-2 rounded cursor-pointer z-20 '>
                        <Image width={"16px"} height={"16px"} alt='' src={images.walletwhite} />
                        <p className='text-white font-semibold'>Connect wallet</p>
                    </div>
                    <DropDown />
                </div>
            </div>
        )
    }

    if (register) {
        return (
            <div className='flex w-full items-center justify-between px-5 sm:px-10 lg:px-20 pt-5 relative z-10'>
                <Link href='/'>
                    <Image width={"50px"} height={"50px"} src={images.logo} alt='' className="cursor-pointer" />
                </Link>
                <div className='flex gap-1'>
                    <div className='bg-black px-4 sm:px-8 py-2 sm:py-4 rounded cursor-pointer z-20'>
                        {!(walletAddress || localWalletAddress) ?
                            <div className='flex items-center gap-2'>
                                <Image width={"16px"} height={"16px"} alt='' src={images.walletwhite} />
                                <p className='text-white font-semibold'>Connect wallet</p>
                            </div>
                            :
                            <p className='text-white font-semibold'>{(walletAddress || localWalletAddress).slice(0, 5)}...{(walletAddress || localWalletAddress).slice(-5)}</p>
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>Navbar</div>
    )
}

export default Navbar