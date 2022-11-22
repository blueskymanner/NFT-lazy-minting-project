import React, { useState, useRef, useEffect } from 'react'
import AddRegion from '../components/AddRegion'
import Navbar from '../components/Navbar'

function useOutsideAlerter(ref, setFade) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setFade(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setFade]);
}

function RegisterBuilding() {

    const [fade, setFade] = useState(false)
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setFade);

    return (
        <div>
            {
                fade &&
                <div className='fixed top-0 left-0 w-full z-40 h-full fadeBg flex justify-center items-center'>
                    <AddRegion setFade={setFade} myref={wrapperRef} />
                </div>
            }
            <Navbar nft />
            <div className='px-5 sm:px-10 xl:px-20 py-[60px]'>
                <div className='flex gap-2 mb-10 cursor-pointer'>
                    <img src='left.png'></img>
                    <p className='text-[#3366CC] font-bold'>Back</p>
                </div>
                <p className='text-black font-bold text-2xl mb-10'>Register A Building</p>
                <div className='flex flex-col lg:flex-row items-start gap-16'>
                    <div className='w-full lg:w-1/2 flex flex-row justify-end relative'>
                        <div className='bg-white py-20 lg:py-40 border-greythree border-dashed border-spacing-1 border-2 rounded-lg flex z-20 w-[93%] justify-center items-center'>
                            <div className='flex items-center flex-col justify-center gap-3'>
                                <div className='rounded-full bg-[#F5FBFE] p-3 flex items-center justify-center'>
                                    <img src='file.png'></img>
                                </div>
                                <p>Drag and drop files here</p>
                                <p>OR</p>
                                <div className='border border-black rounded-[4px] p-[3px]'>
                                    <div className=' bg-black flex justify-center rounded-[4px] items-center'>
                                        <p className='text-white text-left py-2 px-4 cursor-pointer '>Browse from your computer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-greythree border-dashed h-full border-spacing-1 border-2 rounded-lg absolute top-[20px] md:top-[40px] right-[20px] md:right-[40px] w-[93%] z-0'>                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 relative'>
                        <div className='flex flex-col items-start gap-10 w-full'>
                            <div className='flex flex-col items-start gap-3 w-full'>
                                <p className='font-semibold text-base'>Name</p>
                                <input placeholder='Item Name' className='border border-greythree rounded-[4px] w-full outline-none px-5 py-4'></input>
                            </div>
                            <div className='flex gap-20 justify-start items-start w-full'>
                                <div className='flex flex-col items-start gap-3 w-full'>
                                    <p className='font-semibold text-base'>Number of shares</p>
                                    <input placeholder='ex. 50' className='border text-center border-greythree rounded-[4px] w-24 outline-none px-5 py-4'></input>
                                </div>
                                <div className='flex flex-col items-start gap-3 w-full'>
                                    <p className='font-semibold text-base'>Issue price per share</p>
                                    <input placeholder='ex: $50' className='border text-center border-greythree rounded-[4px] w-24 outline-none px-5 py-4'></input>
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-3 w-full'>
                                <p className='font-semibold text-base'>External Link</p>
                                <input placeholder='https://yoursite.io/item/123' className='border border-greythree rounded-[4px] w-full outline-none px-5 py-4'></input>
                            </div>
                            <div className='flex flex-col items-start gap-3 w-full'>
                                <p className='font-semibold text-base'>Description</p>
                                <textarea rows="4" placeholder='Provide a detailed description of your item.' className='border border-greythree rounded-[4px] w-full outline-none px-5 py-4' style={{ "maxHeight": "130px" }}></textarea>
                            </div>
                        </div>
                        <p className=' mt-3 translate-y-5 cursor-pointer text-[#2979FF] font-bold'>Issue Risk Mitigation</p>
                    </div>
                </div>
                <div className='flex items-center mb-40 mt-10 lg:mt-0'>
                    <div className='w-1/2'>
                        <div onClick={() => {
                            setFade(true)
                        }} className='flex items-center justify-center rounded-sm border-2 cursor-pointer border-dashed border-spacing-2 border-greythree w-[100px] h-[100px]'>
                            <img src='plus.png'></img>
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-end'>
                        <div className='border border-black rounded-[4px] p-[3px] lg:translate-y-10 mt-0 lg:mt-5'>
                            <div className='bg-black flex justify-center rounded-[4px] items-center'>
                                <p className='text-white text-left py-2 px-4 cursor-pointer '>Done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterBuilding