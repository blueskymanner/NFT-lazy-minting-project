import React from 'react'

function BuildingCollectionCard({ protectedByMVR }) {
  return (
    <div className='px-1 flex flex-col gap-3 py-2 boxShadowFourEight w-48 xl:w-64 mb-8'>
      <p className='px-[10px] text-greythree text-sm'>Price per slot: <span className='text-black'>$10,600</span></p>
      <div className='relative'>
        <img src='colbuilding.png' className='rounded-lg bg-cove w-full z-10'></img>
        {
          protectedByMVR &&
          <div className='absolute flex gap-2 top-3 left-3 z-30'>
            <img src='protect.png'></img>
            <p className='font-bold text-sm text-white'>Protected by MVR</p>
          </div>
        }
        <div className='absolute fadeOnImages w-full h-full top-0 rounded-lg z-20'>
        </div>
      </div>
      <p className='px-[10px] text-greythree text-sm'>Hollywood Walk of Fame</p>
      <p className='px-[10px] font-extrabold text-md'>Revenue/yr: <span className='text-[#269DFF]'>$13.2M</span></p>
    </div>
  )
}

export default BuildingCollectionCard