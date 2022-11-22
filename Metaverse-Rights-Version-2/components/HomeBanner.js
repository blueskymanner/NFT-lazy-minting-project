import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import images from '../assets'

function HomeBanner() {

    const router = useRouter();

    return (
        <div className='flex flex-col sm:flex-col-reverse lg:flex-row w-full h-full mt-10 lg:-mt-20 gap-2 sm:gap-12 lg:gap-0'>
            <div className='w-full lg:w-[55%] xl:w-1/2 flex justify-center items-center'>
                <div className='w-full lg:w-auto px-5 sm:px-10 xl:px-20 flex flex-col sm:flex-col-reverse md:flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-center z-10 gap-5'>
                    <div className='flex sm:block justify-start w-full'>
                        <div className='items-center gap-3 hidden sm:flex'>
                            <Image src={images.logo} />
                            <p className='font-semibold text-sm'>Extended Reality Exchange</p>
                        </div>
                        <p className='font-semibold text-2xl sm:text-4xl mb-5'>A marketplace <br /> for <span className='text-[#1DA1F2]'>Real Estate</span> owners to <br /> Benefit from the <span className='text-[#BF5AE0]'>Metaverse</span></p>
                        <p className='text-[#616161] text-sm sm:text-md mb-10 hidden sm:block'>The Metaverse Rights platform is the only ethical marketplace that has <br />
                            been created for Real Estate owners to be protected from attacks and <br />
                            financially benefit from the advertising opportunities in the Metaverse.</p>
                    </div>
                    <div className='w-[80%] sm:w-auto hidden sm:block'>
                        <p className='font-bold text-[#212121] mb-5'>Register As</p>
                        <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 sm:gap-8 w-full'>
                            <div className='border border-black rounded-md p-[3px]'>
                                <div className='bg-black flex justify-center rounded-[4px] items-center'>
                                    <p className='text-white text-left py-[13px] px-[26px] cursor-pointer' onClick={() => { router.push('/register/investor') }}>Investor</p>
                                </div>
                            </div>
                            <div className='border border-black rounded-md p-[3px] w-max'>
                                <p className='text-black text-center sm:text-left py-[13px] px-[26px] cursor-pointer' onClick={() => { router.push('/register/buildingOwner') }}>Building Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[45%] xl:w-1/2 relative flex items-center justify-center'>
                <div className='absolute top-0 right-0 w-full'>
                    <Image src={images.bannergradient} objectFit="contain" layout='responsive' draggable={false} />
                </div>
                <div className='relative w-auto h-full sm:w-[400px] sm:h-[365px] xl:w-[481px] xl:h-[444px] mx-4 sm:mx-0'>
                    <img src='/banner.png' className="z-10 rounded-md hidden lg:block" draggable={false} />
                    <div className='flex justify-center absolute bg-[#00000090] bottom-0 w-full rounded-md'>
                        <p className='text-white text-sm p-3 block sm:hidden z-10'>The Metaverse Rights platform is the only ethical marketplace that has been created for Real Estate owners to be protected from attacks and financially benefit from the advertising opportunities in the Metaverse.</p>
                    </div>
                    <img src='/mobile-banner.png' className="z-10 block lg:hidden z-0" draggable={false} />
                </div>
            </div>
            <div className='w-full sm:w-auto block sm:hidden z-10 px-5 mt-10'>
                <p className='font-bold text-[#212121] mb-5 text-center'>Register As</p>
                <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 sm:gap-8 w-full'>
                    <div className='border border-black rounded-md p-[3px]'>
                        <div className='bg-black flex justify-center rounded-[4px] items-center'>
                            <p className='text-white text-left py-[13px] px-[26px] cursor-pointer' onClick={() => { router.push('/register/investor') }}>Investor</p>
                        </div>
                    </div>
                    <div className='border border-black rounded-md p-[3px]'>
                        <p className='text-black text-center sm:text-left py-[13px] px-[26px] cursor-pointer' onClick={() => { router.push('/register/buildingOwner') }}>Building Owner</p>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-[2%] right-[8%]'>
                <Image src={images.tm} draggable={false} />
            </div>
        </div>
    )
}

export default HomeBanner