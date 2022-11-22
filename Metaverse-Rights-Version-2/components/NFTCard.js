import React from 'react'
import { Icon } from '@iconify/react'

function NFTCard() {
    return (
        <div className='shadow-md px-2 flex flex-col w-[288px] rounded-lg blueShadow'>
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
                <img src='room4.png' />
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
    )
}

export default NFTCard