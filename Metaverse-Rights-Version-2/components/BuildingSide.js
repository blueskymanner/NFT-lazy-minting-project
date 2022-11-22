import React from 'react'

function BuildingSide() {
    return (
        <div className='mainBigShadow p-5 rounded-xl flex flex-col items-center gap-5 mb-[70px]'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-around w-full gap-[35px]'>
                <div className='flex flex-col gap-5'>
                    <p className='font-semibold text-2xl'>The 4 Exterior Sides</p>
                    <div>
                        <p className='font-semibold text-md text-greythree'>Description</p>
                        <p className='font-semibold text-md text-black'>The spots around the whole building from rooftop to ground floor.</p>
                    </div>
                    <div className='grid grid-cols-3 text-left gap-y-5 gap-x-5 xl:gap-x-10'>
                        <div className='flex gap-1 flex-col'>
                            <p className='font-semibold text-md text-greythree'>Terms Start</p>
                            <p className='font-semibold text-md text-black'>N/A</p>
                        </div>
                        <div className='flex gap-1 flex-col'>
                            <p className='font-semibold text-md text-greythree'>Terms</p>
                            <p className='font-semibold text-md text-black'>5 years</p>
                        </div>
                        <div className='flex gap-1 flex-col'>
                            <p className='font-semibold text-md text-greythree'>Numbers sold</p>
                            <p className='font-semibold text-md text-black'>438</p>
                        </div>
                        <div className='flex gap-1 flex-col'>
                            <p className='font-semibold text-md text-greythree'>Total Shares</p>
                            <p className='font-semibold text-md text-black'>1000</p>
                        </div>
                        <div className='flex gap-1 flex-col'>
                            <p className='font-semibold text-md text-greythree'>Price Per Share</p>
                            <p className='font-semibold text-md text-black'>$800</p>
                        </div>
                        <div className='flex gap-1 flex-col'>
                            <p className='font-semibold text-md text-greythree'>Est. Revenue</p>
                            <p className='font-semibold text-md text-[#2196F3]'>$3M<span className='text-black'>/yr</span></p>
                        </div>
                    </div>

                    <div className='flex gap-[3px] 2xl:gap-[30px] relative flex-wrap hidden 2xl:flex'>
                        <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer'>
                            <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-[100px] h-[100px]'></img>
                        </div>

                        <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer'>
                            <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-[100px] h-[100px]'></img>
                        </div>

                        <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer'>
                            <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-[100px] h-[100px]'></img>
                        </div>

                        <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer'>
                            <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-[100px] h-[100px]'></img>
                        </div>
                    </div>
                </div>
                <img src='side.png' className='w-full lg:w-auto' />
            </div>
            <div className='flex gap-auto lg:gap-[30px] relative justify-between lg:justify-center flex-wrap w-full block 2xl:hidden px-0 sm:px-8 md:px-0'>
                <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer'>
                    <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-[80px] lg:w-[100px] h-[80px] lg:h-[100px]'></img>
                </div>

                <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer'>
                    <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-[80px] lg:w-[100px] h-[80px] lg:h-[100px]'></img>
                </div>

                <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer'>
                    <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-[80px] lg:w-[100px] h-[80px] lg:h-[100px]'></img>
                </div>

                <div className='relative border-2 border-white hover:border-black rounded-xl cursor-pointer'>
                    <img src='lr1.png' className='m-0 p-[2px] rounded-xl w-[80px] lg:w-[100px] h-[80px] lg:h-[100px]'></img>
                </div>
            </div>
            <div className='flex bg-black items-center border-black border-2 h-[48px] justify-center w-[210px] px-2  py-4 gap-2 rounded cursor-pointer z-20 '>
                <img src='tupp.png' className='h-4 w-4' />
                <p className='text-white font-semibold'>View Performance</p>
            </div>
        </div>
    )
}

export default BuildingSide