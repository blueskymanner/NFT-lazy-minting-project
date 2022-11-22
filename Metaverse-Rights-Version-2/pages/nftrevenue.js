import React, { useState } from "react";
import { useRouter } from "next/router";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Chart as ReactChart, Line } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Filler, Legend, CategoryScale, LinearScale, PointElement, LineElement);
import Navbar from "../components/Navbar";
import CollectionoPortfolioCard from "../components/CollectionoPortfolioCard";

function NFTRevenue() {

    const router = useRouter();

    const [showPerformance, setShowPerformance] = useState(false);
    const [grad, setGrad] = useState();
    const [ctx, setCtx] = useState()

    const showGraph = () => {


        if (!ctx) {
            var ctx = document.getElementById("chart").getContext("2d")
            var gradient = ctx.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, 'rgb(210, 236, 252,1)');
            gradient.addColorStop(1, 'rgb(210, 236, 252,0.1)');
            setCtx(ctx);
            setGrad(gradient)
            setShowPerformance(true)
            console.log("this")
        }
        if (ctx) {
            var gradient = ctx.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, 'rgb(210, 236, 252,1)');
            gradient.addColorStop(1, 'rgb(210, 236, 252,0.1)');
            console.log(gradient)
            setGrad(gradient)
            setShowPerformance(true)
        }

    }

    const labels = ['Jan', 'Feb', 'Mar', 'Apr']
    const data = {
        labels: labels,
        datasets: [{
            label: 'NFT Revenue',
            data: [350, 225, 500, 375],
            borderColor: '#9FD7F9',
            tension: 0.5,
            fill: {
                target: 'origin',
                above: grad,   // Area will be red above the origin   // And blue below the origin
            },
            responsive: true
        }],
    }



    return (
        <div>
            <Navbar nft />
            <div className='px-5 sm:px-10 xl:px-20 py-[20px] sm:py-[60px]'>
                <div className='flex gap-2 mb-4 md:mb-10 cursor-pointer' onClick={() => router.push('/')}>
                    <img src='left.png' />
                    <p className='text-[#3366CC] font-bold'>Back</p>
                </div>
                <div className="flex gap-5">
                    <div className="w-full lg:w-8/12 xl:w-9/12">
                        <p className="text-2xl font-bold mb-5">NFT STATISTICS</p>
                        <div className="flex flex-col md:flex-row items-center gap-[30px] justify-between">
                            <div className="w-full md:w-1/2 xl:w-5/12">
                                <img src="nftbuilding.png" className="rounded-lg w-full md:w-auto" />
                            </div>
                            <div className="w-full md:w-1/2 xl:w-7/12">
                                <p className="text-2xl font-bold mb-5">NFT Name</p>
                                <div className="flex flex-col gap-7 xl:gap-10">
                                    <div className="flex gap-8">
                                        <div className='flex flex-col gap-3'>
                                            <p className='font-bold text-sm text-greythree'>Price Purchased</p>
                                            <p className='font-semibold font-base text-black'>1234</p>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <p className='font-bold text-sm text-greythree'>Time of Purchase</p>
                                            <p className='font-semibold font-base text-black'>1234</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 xl:gap-[30px]'>
                                        <div className='flex flex-col gap-4 xl:gap-8'>
                                            <p className='font-bold text-sm text-greythree'>Total Share Value</p>
                                            <p className='font-bold font-base text-[#269DFF]'>$13.2M<span className="text-greythree">/yr</span></p>
                                        </div>
                                        <div className='flex flex-col gap-4 xl:gap-8'>
                                            <p className='font-bold text-sm text-greythree'>Total Share Revenue</p>
                                            <p className='font-bold font-base text-[#269DFF]'>$7.7M</p>
                                        </div>
                                        <div className='flex flex-col gap-4 xl:gap-8'>
                                            <p className='font-bold text-sm text-greythree'>Active Secondary Auction Sale</p>
                                            <p className='font-bold font-base text-[#269DFF]'>$7.7M</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='flex bg-black items-center px-8 py-2 xl:py-4 gap-2 rounded cursor-pointer z-20 '>
                                            <p className='text-white font-semibold'>Resell</p>
                                        </div>
                                        <div className='flex border-greyfour border bg-white items-center px-8 py-2 xl:py-4 gap-2 rounded cursor-pointer z-20 '>
                                            <p className='text-black font-semibold'>Mint</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10">
                            <div onClick={() => { showPerformance ? setShowPerformance(false) : showGraph() }} className={` flex mt-5 border ease-in-out duration-300 cursor-pointer border-greytwo ${showPerformance ? 'rounded-t-lg rounded-b-none ' : 'rounded-lg'}   gap-5 py-[18px] px-5 items-center justify-between`}>
                                <div className='flex gap-5 items-center' >
                                    <img src='rev.png'></img>
                                    <p className='font-md text-xl'>Performance History</p>
                                </div>
                                <img src='down.png' className={` ${showPerformance && 'rotate-180'} ease-in-out duration-300`}></img>
                            </div>


                            <div className="bg-[#FAFDFF] py-5 px-3 sm:px-5 md:px-10  ease-in-out duration-300">
                                {
                                    showPerformance &&
                                    <div className="flex gap-5">
                                        <div className=' flex border border-greytwo rounded-lg gap-5 py-[17px] px-5 items-center justify-between'>
                                            <div className='flex gap-5 items-center'>
                                                <p className='font-medium text-sm'>All time</p>
                                            </div>
                                            <img src='down.png' ></img>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <p className="text-[#797979] ">All time avg revenue</p>
                                            <div className="flex gap-2 items-center">
                                                <img src='usdsmall.png'></img>
                                                <p className="text-black">11.2</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className={`${!showPerformance ? 'opacity-0' : ' opacity-1'} w-full mt-5`}>
                                    <Line
                                        data={data}
                                        id="chart"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="w-[0%] lg:w-4/12 xl:w-3/12 hidden lg:block">
                        <div className="border border-[#A4A4A4] p-5 rounded-lg">
                            <p className="text-xl text-black mb-5">Collections</p>
                            <div className="flex flex-col items-center justify-center gap-10">
                                <CollectionoPortfolioCard revenue src='c1.png' name='Stamford Bridge' price='200' percent='+4.3' shares='1' hash='Oxfe18....3E4F97' />
                                <CollectionoPortfolioCard revenue src='c2.png' name='Stamford Bridge' price='200' percent='+4.3' shares='1' hash='Nil' />
                                <CollectionoPortfolioCard revenue src='c1.png' name='Stamford Bridge' price='200' percent='+4.3' shares='1' hash='Nil' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTRevenue