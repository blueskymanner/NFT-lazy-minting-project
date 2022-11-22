import React, { useState } from 'react'
import { useRouter } from 'next/router'
import CollectionoPortfolioCard from '../components/CollectionoPortfolioCard'
import Navbar from '../components/Navbar'
import PortfolioCard from '../components/PortfolioCard'

function Portfolio() {

    const [hoveredOuter, setHoveredOuter] = useState(false)
    const router = useRouter();

    return (
        <div>
            <Navbar nft />
            <div className='px-5 sm:px-10 xl:px-20 py-[60px]'>
                <div className='flex gap-2 mb-4 md:mb-10 cursor-pointer' onClick={() => router.push('/')}>
                    <img src='left.png' />
                    <p className='text-[#3366CC] font-bold'>Back</p>
                </div>

                <p className='text-greythree text-[30px] xl:text-[32px] mb-5'>My Portfolio</p>
                <div className='p-[10px] sm:p-[30px] bg-white sm:bg-[#F5F5FF] rounded-[20px] w-[100%] sm:w-auto overflow-x-auto overflow-y-hidden'>
                    <div className='w-[950px] flex flex-row sm:flex-col xl:flex-row justify-between sm:w-auto gap-5'>
                        <div className='w-full xl:w-1/2 flex gap-5'>
                            <PortfolioCard src='uptrend.png' type='1' heading='Total Revenue' value='15,410' about='This is the total value in USD that you have Recieved in Properties, Shares and NFTs.' />
                            <PortfolioCard src='uptrend.png' type='1' heading='Total Invested' value='5,410' about='This is the total value in USD that you have invested in Properties, Shares and NFTs.' />
                        </div>
                        <div onMouseEnter={() => { setHoveredOuter(true) }} onMouseLeave={() => { setHoveredOuter(false) }} className='flex w-full xl:w-1/2 bg-white hover:bg-black justify-around rounded-xl px-5 pb-5 pt-5 sm:pb-10 sm:pt-11 gap-[14px]'>
                            <PortfolioCard setHoveredOuter={setHoveredOuter} hoveredOuter={hoveredOuter} src='shares.png' heading='No of Shares Owned' value='9' about='Shares' />
                            <div className='bg-[#A4A4A4] h-[full] w-[1px] my-4'>
                            </div>
                            <PortfolioCard setHoveredOuter={setHoveredOuter} hoveredOuter={hoveredOuter} src='house.png' heading='Total Revenue' value='2' about='Properties' />
                        </div>
                    </div>
                </div>

                <div className='p-[30px] my-20'>
                    <div className='w-full flex items-center justify-between mb-[30px]'>
                        <p className='text-2xl'>My Collections</p>
                        <div className='flex items-center gap-2'>
                            <img src='grid.png' className='w-[17px] h-[17px]'></img>
                            <img src='cols.png' className='w-[17px] h-[17px]'></img>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-wrap sm:flex-row items-center gap-x-5 gap-y-[60px] justify-between'>
                        <CollectionoPortfolioCard src='c1.png' name='Stamford Bridge' price='200' percent='+4.3' shares='1' hash='Oxfe18....3E4F97' />
                        <CollectionoPortfolioCard src='c2.png' name='Stamford Bridge' price='200' percent='+4.3' shares='1' hash='Oxfe18....3E4F97' />
                        <CollectionoPortfolioCard src='c3.png' name='Stamford Bridge' price='200' percent='+4.3' shares='1' hash='Oxfe18....3E4F97' />
                        <CollectionoPortfolioCard src='c4.png' name='Stamford Bridge' price='200' percent='+4.3' shares='1' hash='Oxfe18....3E4F97' />
                        <CollectionoPortfolioCard src='c5.png' name='Emirates Stadium' price='800' percent='+24.3' shares='3' hash='Oxfe18....3E4F97' />
                        <CollectionoPortfolioCard src='c6.png' name='Emirates Stadium' price='800' percent='+24.3' shares='4' hash='Oxfe18....3E4F97' />
                        <CollectionoPortfolioCard src='c7.png' name='Emirates Stadium' price='800' percent='+24.3' shares='8' hash='Oxfe18....3E4F97' />
                        <CollectionoPortfolioCard src='c8.png' name='Emirates Stadium' price='800' percent='+24.3' shares='23' hash='Oxfe18....3E4F97' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio