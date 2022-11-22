import React from 'react'
import { useRouter } from 'next/router'

function CollectionoPortfolioCard({ src, name, price, percent, shares, hash, revenue }) {
    const router = useRouter();
    return (
        <div className='blueShadow px-1 pt-1 pb-3 rounded-lg bg-white flex flex-col gap-[10px] cursor-pointer' onClick={() => router.push('/nftrevenue')}>
            <img className='h-[200px] w-[300px] rounded-sm' src={src}></img>
            <div className=' px-2 flex justify-between items-center'>
                <p className='text-sm text-black'>{name}</p>
                <div className='flex gap-1 items-center'>
                    <p className='text-sm text-black'>${price}</p>
                    <p className='text-[10px] text-greenfive'>( {percent}%)</p>
                </div>
            </div>
            <p className=' px-2 text-sm text-greythree'>No of Shares <span className='text-sm text-black'>{shares}</span></p>
            <p className=' px-2 text-sm text-greythree'>Txn Harsh <span className='text-sm text-black'>{hash}</span></p>
            <div className=' px-2  flex justify-end'>
                <div className='flex bg-black items-center px-[14px] py-[7px] rounded-md cursor-pointer z-20 '>
                    {
                        revenue ?
                            <p className='text-white font-semibold text-xs'>Resell Now</p>
                            :
                            <p className='text-white font-semibold text-xs'>Resell</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionoPortfolioCard