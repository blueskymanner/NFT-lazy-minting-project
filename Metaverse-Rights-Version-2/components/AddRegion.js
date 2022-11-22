import React from 'react'

function AddRegion({ setFade, myref }) {
    return (
        <div className='mainBigShadow rounded-[20px] bg-white pt-10 px-[25px] lg:px-[50px] pb-20 w-[640px] lg:w-[786px] h-auto h-[80%] overflow-y-auto opacity animation transition-opacity' ref={myref}>
            <p className='font-bold text-black text-xl mb-7'>Add Licensing Region</p>
            <div className='flex flex-col gap-3 items-start'>
                <p className='text-sm font-medium text-greythree'>Select number of available region.</p>
                <div className='cursor-pointer shadowSmall rounded-[4px] flex justify-center items-center gap-1 px-3 py-2'>
                    <p className='font-medium text-sm text-black'>4</p>
                    <img src='downblack.png'></img>
                </div>
            </div>
            <div className='border border-greyone mt-[30px] mb-10'></div>
            <div className='flex flex-col sm:flex-row items-start gap-[52px]'>
                <div className='w-full sm:w-1/2 flex justify-end relative'>
                    <div className='py-10 border-greythree border-dashed border-spacing-1 border-2 rounded-lg flex z-0 w-[95%] sm:w-[250px] lg:w-[280px] h-[250px] lg:h-[280px] justify-center items-center' />
                    <div className='bg-white border-greythree border-dashed flex justify-center items-center w-[95%] sm:w-[250px] lg:w-[280px] h-[250px] lg:h-[280px] border-spacing-1 border-2 rounded-lg absolute bottom-[20px] left-[0px] lg:left-[20px] z-10'>
                        <div className='flex items-center flex-col justify-center gap-3'>
                            <div className='rounded-full bg-[#F5FBFE] p-3 flex items-center justify-center'>
                                <img src='file.png'></img>
                            </div>
                            <p className='text-xs'>Drag and drop files here</p>
                            <p className='text-xs'>OR</p>
                            <div className='border border-black rounded-[4px] p-[3px]'>
                                <div className=' bg-black flex justify-center rounded-[4px] items-center'>
                                    <p className='text-white text-left text-[10px] py-2 px-4 cursor-pointer '>Browse from your computer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 relative'>
                    <div className='flex flex-col justify-start items-stretch gap-10 w-full'>
                        <div className='flex flex-col items-start gap-3 w-full'>
                            <p className='font-semibold text-base'>Name</p>
                            <input placeholder='Give this region a name' className='border border-greyone rounded-[4px] w-full outline-none px-5 py-4'></input>
                        </div>
                        <div className='flex flex-col items-start gap-3 w-full'>
                            <p className='font-semibold text-base'>Description</p>
                            <textarea rows="2" placeholder='Descibe this region' className='border border-greyone rounded-[4px] w-full outline-none px-5 py-4' style={{ "maxHeight": "60px" }}></textarea>
                        </div>
                        <div className='flex justify-end'>
                            <div className='border border-black rounded-[4px] p-[3px]'>
                                <div className=' bg-black flex justify-center rounded-[4px] items-center'>
                                    <p className='text-white text-sm text-left py-2 px-4 cursor-pointer ' onClick={() => { setFade(false) }}>Continue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3 gap-[30px] relative w-fit hidden sm:flex'>
                <div className='absolute h-[4px] w-full top-6 z-0 left-0 bg-[#F5FBFE]'>

                </div>
                <div className=' z-10 w-[50px] h-[50px] bg-[#F5FBFE] rounded-full flex items-center justify-center'>
                    <div className=' text-white w-[40px] h-[40px] bg-[#2979FF] rounded-full flex items-center justify-center'>
                        1
                    </div>
                </div>
                <div className=' z-10 w-[50px] h-[50px] bg-[#F5FBFE] rounded-full flex items-center justify-center'>
                    <div className='w-[40px] text-white h-[40px] bg-[#E0E0E0] rounded-full flex items-center justify-center'>
                        2
                    </div>
                </div>
                <div className='z-10 w-[50px] h-[50px] bg-[#F5FBFE] rounded-full flex items-center justify-center'>
                    <div className='w-[40px] text-white h-[40px] bg-[#E0E0E0] rounded-full flex items-center justify-center'>
                        3
                    </div>

                </div>
                <div className='z-10 w-[50px] h-[50px] bg-[#F5FBFE] rounded-full flex items-center justify-center'>
                    <div className='w-[40px]  text-white h-[40px] bg-[#E0E0E0] rounded-full flex items-center justify-center'>
                        4
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddRegion