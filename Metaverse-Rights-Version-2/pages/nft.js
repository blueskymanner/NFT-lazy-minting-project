import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import Navbar from '../components/Navbar'
import images from '../assets'
import NFTCard from '../components/NFTCard'

function NFT() {
    const router = useRouter()
    return (
        <div>
            <Navbar nft />
            <div className='px-3 sm:px-10 xl:px-20 py-[60px] pt-[24px] md:pt-[60px]'>
                <div className='flex gap-2 mb-4 md:mb-10 cursor-pointer' onClick={() => router.push('/browse')}>
                    <img src='left.png' />
                    <p className='text-[#3366CC] font-bold'>Back</p>
                </div>

                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='justify-between flex md:hidden'>
                        <div className='flex flex-col gap-3 xl:gap-5'>
                            <p className='font-md text-4xl'>Empire</p>
                            <p className='font-semibold text-greyfour text-base'>Owner <span className='text-[#448AFF] font-bold'>Blackrock</span></p>
                        </div>
                        <div className='flex shadow-md rounded-lg h-full'>
                            <div className='p-[10px] lg:p-[12px] xl:p-[15px] flex items-center justify-center border border-greytwo rounded-tl-lg rounded-bl-lg cursor-pointer'><Icon icon="akar-icons:more-horizontal" color="#757575" width="24" height="24" /></div>
                            <div className='p-[10px] lg:p-[12px] xl:p-[15px] flex items-center justify-center border border-greytwo cursor-pointer'><Icon icon="carbon:share" color="#757575" width="25" height="25" /></div>
                            <div className='p-[10px] lg:p-[12px] xl:p-[15px] flex items-center justify-center border border-greytwo rounded-tr-lg rounded-br-lg cursor-pointer'><Icon icon="material-symbols:refresh-rounded" color="#757575" width="27" height="27" /></div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-5/12 flex flex-col gap-4 h-min'>
                        <div className='w-full h-full'>
                            <div className='border border-greyfour rounded-tr-lg rounded-tl-lg flex p-3 justify-between items-center'>
                                <img src='usd.png' className='pl-2' />
                                <p>Licensing Region 1</p>
                                <div className='py-2 px-[14px] bg-[#F0F0FF] rounded-lg'>
                                    <img src='heart.png' />
                                </div>
                            </div>
                            <img className='w-full max-h-[600px] rounded-br-lg rounded-bl-lg' src='lr1.png' />
                        </div>

                        <div className='md:grid grid-cols-2 md:grid-cols-3 xl:flex gap-1 xl:gap-[30px] relative hidden'>
                            <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer w-[100px]'>
                                <div className='z-10 w-[25px] h-[25px] absolute right-2 top-2 rounded-lg flex items-center justify-center blurShadow'>
                                    <p className='text-white  text-xs'>1</p>
                                </div>
                                <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-full lg:w-[100px] lg:h-[100px]' />
                            </div>

                            <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer w-[100px]'>
                                <div className='z-10 w-[25px] h-[25px] absolute right-2 top-2 rounded-lg flex items-center justify-center blurShadow'>
                                    <p className='text-white  text-xs'>2</p>
                                </div>
                                <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-full lg:w-[100px] lg:h-[100px]' />
                            </div>

                            <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer w-[100px]'>
                                <div className='z-10 w-[25px] h-[25px] absolute right-2 top-2 rounded-lg flex items-center justify-center blurShadow'>
                                    <p className='text-white  text-xs'>3</p>
                                </div>
                                <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-full lg:w-[100px] lg:h-[100px]' />
                            </div>

                            <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer w-[100px]'>
                                <div className='z-10 w-[25px] h-[25px] absolute right-2 top-2 rounded-lg flex items-center justify-center blurShadow'>
                                    <p className='text-white  text-xs'>4</p>
                                </div>
                                <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-full lg:w-[100px] lg:h-[100px]' />
                            </div>

                        </div>
                    </div>

                    <div className='w-full md:w-1/2 lg:w-7/12'>
                        <div className='justify-between hidden md:flex'>
                            <div className='flex flex-col gap-3 xl:gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src='verify.png' />
                                    <p className='font-md text-sm'>Risk mitigated by MVR</p>
                                </div>
                                <p className='font-md text-4xl'>Empire</p>
                                <p className='font-semibold text-greyfour text-base'>Owner <span className='text-[#448AFF] font-bold'>Blackrock</span></p>
                            </div>
                            <div className='flex flex-col shadow-md rounded-lg'>
                                <div className='p-[10px] lg:p-[12px] xl:p-[15px] flex items-center justify-center border border-greytwo rounded-tl-lg rounded-tr-lg cursor-pointer'><Icon icon="akar-icons:more-horizontal" color="#757575" width="24" height="24" /></div>
                                <div className='p-[10px] lg:p-[12px] xl:p-[15px] flex items-center justify-center border border-y-0 border-greytwo cursor-pointer'><Icon icon="carbon:share" color="#757575" width="25" height="25" /></div>
                                <div className='p-[10px] lg:p-[12px] xl:p-[15px] flex items-center justify-center border border-greytwo rounded-bl-lg rounded-br-lg cursor-pointer'><Icon icon="material-symbols:refresh-rounded" color="#757575" width="27" height="27" /></div>
                            </div>
                        </div>

                        <div className='flex gap-8 lg:gap-20 mb-7 xl:mb-10'>
                            <div className='flex flex-col gap-3'>
                                <p className='font-bold text-sm text-greythree'>Total Shares</p>
                                <p className='font-semibold font-base'>1000</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='font-bold text-sm text-greythree'>Est. Revenue</p>
                                <p className='font-semibold font-base'>$3M/yr</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='font-bold text-sm text-greythree'>Numbers sold</p>
                                <p className='font-semibold font-base'>438</p>
                            </div>
                        </div>

                        <div className='border border-greytwo rounded-tl-lg gap-3 rounded-tr-lg flex flex-col py-[15px] xl:py-[23px] px-5'>
                            <p className='font-md text-greyfour'>Sales ends September 20, 2022 at 12:14pm Est</p>
                            <div className='flex gap-8 gap-12 lg:gap-20'>
                                <div className='flex flex-col gap-3'>
                                    <p className='font-md text-xl lg:text-2xl text-[#E53935]'>10</p>
                                    <p className='font-semibold text-sm lg:text-base text-greyfour'>Hours</p>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <p className='font-md text-xl lg:text-2xl text-[#E53935]'>12</p>
                                    <p className='font-semibold text-sm lg:text-base text-greyfour'>Minutes</p>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <p className='font-md text-xl lg:text-2xl text-[#E53935]'>03</p>
                                    <p className='font-semibold text-sm lg:text-base text-greyfour'>Seconds</p>
                                </div>
                            </div>
                        </div>
                        <div className='border border-greytwo rounded-bl-lg border-t-0 rounded-br-lg px-5 flex flex-col bg-[#F5FBFE] py-3 xl:py-5'>
                            <p className='font-base font-semibold text-greyfour mb-5'>Current Price Per Share</p>
                            <div className='flex gap-2 items-center mb-7'>
                                <img src='usd.png' className='w-5 h-5' />
                                <p className='font-bold text-2xl'>800.12</p>
                                <p className='font-semibold text-base'>$800</p>
                            </div>
                            <div className='flex gap-3 lg:gap-8'>
                                <div className='flex bg-black items-center px-6 lg:px-8 py-3 xl:py-4 gap-2 rounded cursor-pointer z-20 '>
                                    <Image width={"16px"} height={"16px"} src={images.walletwhite} />
                                    <p className='text-white font-semibold text-sm lg:text-md'>Buy Now</p>
                                </div>
                                <div className='flex border-greyfour border bg-white items-center px-6 lg:px-8 py-3 xl:py-4 gap-2 rounded cursor-pointer z-20 '>
                                    <img width={"16px"} height={"16px"} src='bookmark.png' />
                                    <p className='text-black font-semibold text-sm lg:text-md'>Mint Later</p>
                                </div>
                            </div>
                        </div>

                        <div className='border border-greytwo rounded-tl-lg mt-5 xl:mt-10 gap-3 rounded-tr-lg flex py-[23px] px-5'>
                            <img src='desc.png' />
                            <p className='font-bold text-black'>Description</p>
                        </div>
                        <div className='border border-greytwo rounded-bl-lg border-t-0 rounded-br-lg px-5 flex flex-col bg-[#F5FBFE] py-[20px] xl:pt-[30px] pb-3 xl:pb-6'>
                            <p className='font-base font-bold text-black mb-3'>Owners name</p>
                            <p className='font-md text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                                sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>

                <div className=' flex mt-20 border border-greytwo rounded-lg gap-5 py-[18px] px-5 items-center justify-between cursor-pointer'>
                    <div className='flex gap-5 items-center'>
                        <img src='activity.png' />
                        <p className='font-bold text-xl'>Item Activity</p>
                    </div>
                    <Icon icon="akar-icons:chevron-down" color="#757575" width="20" height="20" />
                </div>

                <div className=' flex mt-20 border border-greytwo rounded-tr-lg rounded-tl-lg gap-5 py-[18px] px-5 items-center justify-between cursor-pointer'>
                    <div className='flex gap-5 items-center'>
                        <img src='layers.png' />
                        <p className='font-bold text-xl'>More from Blackrock</p>
                    </div>
                    <Icon icon="akar-icons:chevron-up" color="#757575" width="20" height="20" />
                </div>
                <div className='bg-[#F5FBFE] py-10 flex flex-col'>
                    <div className='flex justify-between items-center flex-col sm:flex-row sm:flex-wrap gap-8'>
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                    </div>
                    <div className='w-full flex justify-center pt-16'>
                        <div className='flex bg-black items-center px-8 py-4 gap-2 rounded cursor-pointer z-20 '>
                            <p className='text-white font-semibold'>View Collection</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NFT