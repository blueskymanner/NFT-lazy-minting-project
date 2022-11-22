import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import useFetch from "react-fetch-hook";
import { PlaidLink } from 'react-plaid-link';
import Navbar from '../../components/Navbar'
import images from '../../assets'

function Register() {
    const [userWallet, setUserWallet] = useState('')
    const { data } = useFetch("/api/createTokenLink/");
    const [linkToken, setLinkToken] = useState('');
    const [first, setFirst] = useState('signup');
    const router = useRouter();

    const handleOnSuccess = async (public_token, metadata) => {
        let myuuid = uuidv4();
        let accessToken = '';
        let processorToken = '';
        let walletId = '';
        let walletAddress = '';
        await fetch(`/api/exchangeToken/?public_token=${public_token}`, {
            method: 'POST',
        }).then(response => response.json()).then(
            response => {
                accessToken = response.access_token;
            }
        )
        await fetch(`/api/processorToken/?access_token=${accessToken}&account_id=${metadata?.account_id}`, {
            method: 'POST',
        }).then(response => response.json()).then(
            response => {
                processorToken = response.processor_token;
            }
        )
        await fetch(`/api/createWalletId/?uuid=${myuuid}`, {
            method: 'POST'
        }).then(response => response.json()).then(
            response => {
                walletId = response.walletId;
            }
        )
        await fetch(`/api/createBlockchainAddress/?uuid=${myuuid}&wallet_id=${walletId}`, {
            method: 'POST',
        }).then(response => response.json()).then(
            response => {
                walletAddress = response.address
                setUserWallet(walletAddress)
                localStorage.setItem('walletAddress', walletAddress)
            }
        )
    };

    useEffect(() => {
        setLinkToken(data?.link_token)
    }, [data?.link_token])

    return (
        <div className='w-full h-screen overflow-hidden relative'>
            <Navbar register walletAddress={userWallet} />
            <div className='w-full h-full flex items-center justify-center -mt-10 relative'>
                <div className='flex items-start justify-between shadow-none sm:shadow-2xl rounded-[20px] w-full h-[700px] max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl sm:mx-0 mx-3'>
                    <div className='w-full sm:w-[70%] md:w-[60%] xl:w-1/2 py-5 sm:py-[88px] px-2 sm:px-[40px] md:px-[60px] lg:px-[110px] flex flex-col gap-5 z-10'>
                        <div className='flex justify-center relative gap-7 mb-10 sm:mb-3 md:mb-0'>
                            <p onClick={() => { setFirst('signup') }} className={`${first === 'signup' ? 'text-black ' : 'text-greyfour '} text-lg md:text-2xl font-bold cursor-pointer`}>Sign up</p>
                            <p onClick={() => { setFirst('signin') }} className={`${first === 'signin' ? 'text-black ' : 'text-greyfour '} text-lg md:text-2xl font-bold cursor-pointer`}>Sign in</p>
                            <div className={`absolute  h-1 rounded-tr-3xl rounded-tl-3xl bg-black top-10 ease-in-out duration-300 ${first === 'signup' ? '-translate-x-[47px] w-[100px]' : 'translate-x-[52px] w-[100px]'}`}></div>
                        </div>
                        {
                            first === 'signup' &&
                            <div className='flex flex-col ease-in-out duration-300'>
                                <div className='flex justify-between'>
                                    <p className='text-black font-bold'>Name</p>
                                    <p className='text-greytwo font-bold first-letter:uppercase'>{router.query.user}</p>
                                </div>
                                <input className='outline-none bg-[#F5FBFE] p-3 font-semibold text-md rounded-[4px] my-3' placeholder='Your first name and last name'></input>
                            </div>
                        }

                        <div>
                            <p className='text-black font-bold'>Email</p>
                            <input className='outline-none bg-[#F5FBFE] p-3 font-semibold text-md rounded-[4px] w-full my-3' placeholder='Type your email address here'></input>
                        </div>

                        <div>
                            <p className='text-black font-bold'>Password</p>
                            <input type="password" className="font-semibold outline-none bg-[#F5FBFE] p-3 text-md rounded-[4px] w-full my-3" placeholder='Type password'></input>
                        </div>

                        <div className='flex justify-center gap-2 items-start'>
                            <input type='checkbox' className='accent-[#2962FF] w-4 h-4 mt-1'></input>
                            <p className='font-medium text-center text-greyfour margin-0'>By ticking this button, it means you’re in agreement <br />
                                with our <span className='text-[#2962FF] font-bold'>Terms</span> & <span className='text-[#2962FF] font-bold'>Conditions</span> </p>
                        </div>
                        <div className='flex justify-center mt-9 gap-4'>
                            <div className='bg-black flex gap-2 px-6 py-3 rounded-[4px] cursor-pointer'>
                                <p className='text-white font-bold' onClick={() => {
                                    if (router.query.user === 'buildingOwner') (
                                        router.push('/ownerdashboard')
                                    )
                                }}>Continue</p>
                                <Icon icon="akar-icons:arrow-right" color="white" width="24" height="24" />
                            </div>
                            <PlaidLink
                                clientName="Web3DAO"
                                env="sandbox"
                                product={["auth", "transactions"]}
                                token={linkToken}
                                onSuccess={handleOnSuccess}
                            >
                                Connect your bank
                            </PlaidLink>
                        </div>
                    </div>
                    <div className='w-[0%] sm:w-[30%] md:w-[40%] xl:w-1/2 h-full overflow-auto sign-bg' />
                    <div className='absolute top-0 right-0 w-full z-0 opacity-70 block sm:hidden'>
                        <Image src={images.bannergradient} objectFit="contain" layout='responsive' draggable={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register