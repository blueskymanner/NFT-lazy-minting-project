import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export default function DropDown() {
    const router = useRouter()
    return (
        <div className="top-16 text-right block md:hidden">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md p-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <Icon icon="carbon:menu" width="30" height="30" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#fefefe] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                        <div className="px-1 py-1 ">
                            <Menu.Item onClick={() => router.push('/')}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <Icon icon="ant-design:home-twotone" width="20" height="20" className='mr-2' />
                                        Home
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item onClick={() => router.push('/browse')}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <Icon icon="bi:search-heart" width="20" height="20" className='mr-2' />
                                        Explorer
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <Icon icon="ph:users" width="20" height="20" className='mr-2' />
                                        About us
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}