import React, { useState } from 'react'

function PortfolioCard({ heading, value, about, src, type, hoveredOuter, setHoveredOuter }) {

    const [hovered, setHovered] = useState(false)

    if (type == 1) {
        return (
            <div className='flex flex-col gap-[14px] rounded-xl hover:bg-black bg-white px-5 pb-5 pt-5 sm:pb-10 sm:pt-11' onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>
                <div className='gap-5 flex items-center'>
                    <div className='w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] rounded-lg flex justify-center items-center p-2 bg-[#F0F0FF]'>
                        <img src={src}></img>
                    </div>
                    <div className='flex flex-col justify-between items-start gap-1 sm:gap-3'>
                        <p className={`${hovered ? 'text-white' : 'text-greythree'}`}>{heading}</p>
                        <p className={`${hovered ? 'text-white' : 'text-black'} text-2xl`}>${value}</p>
                    </div>
                </div>
                <p className={`${hovered ? 'text-white' : 'text-greythree'} text-sm xl:text-base hidden sm:block`}>{about}</p>
            </div>
        )
    }
    return (
        <div className='flex flex-col  text-greythree'>
            <div className='gap-5 flex items-start'>
                <div className='w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] rounded-lg flex justify-center items-center p-2 bg-[#F0F0FF]'>
                    <img src={src}></img>
                </div>
                <div className='flex flex-col justify-between items-start gap-1 sm:gap-3'>
                    <p className={`${hoveredOuter ? 'text-white' : 'text-greythree'}`}>{heading}</p>
                    <p className={`${hoveredOuter ? 'text-white' : 'text-black'} text-2xl`}>${value}</p>
                    <div className='gap-3 py-2 px-[14px] cursor-pointer rounded-[4px] border border-greythree items-center mt-2 hidden sm:flex'>
                        <img src='eye.png'></img>
                        <p className={`${hoveredOuter ? 'text-white' : 'text-greythree'} text-black font-semibold text-xs`}>View</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard