'use client';
import React from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai'
import { useState } from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    return (
            <nav className="sticky w-full h-24 top-0 shadow-xl">
                <div className='flex justify-between items-center h-full w-full px-4 2xl:px:16'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Index It Hub</h1>
                        {/* <Link>
                    <Image src={Logo} alt='Logo' width={205} height={75} className='cursor-pointer' priority/>
                    <a href="#!">Index It Hub</a>
                    </Link> */}
                    </div>
                    <div className='hidden sm:flex'>
                        <ul className='hidden sm:flex'>
                            <Link href={'/'}>
                                <li className='ml-10 font-bold hover:text-blue-500 text-xl'>Home</li>
                            </Link>
                            <Link href={'/about'}>
                                <li className='ml-10 font-bold hover:text-blue-500 text-xl'>About</li>
                            </Link>
                            <Link href={'/service'}>
                                <li className='ml-10 font-bold hover:text-blue-500 text-xl'>Services</li>
                            </Link>
                            <Link href={'/project'}>
                                <li className='ml-10 font-bold hover:text-blue-500 text-xl'>Project</li>
                            </Link>
                            <Link href={'/career'}>
                                <li className='ml-10 font-bold hover:text-blue-500 text-xl'>Career</li>
                            </Link>
                            <Link href={'/contact'}>
                                <li className='ml-10 font-bold hover:text-blue-500 text-xl'>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div onClick={handleNav} className='sm:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className={
                    menuOpen ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-blue-500 p-10 ease-in duration-100"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-100"
                }>
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleNav} className='sm:hidden cursor-pointer'>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className='flex-col py-4'>
                        <ul>
                            <Link href={'/'}>
                                <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer font-bold hover:text-white'>Home</li>
                            </Link>
                            <Link href={'/about'}>
                                <li className='py-4 cursor-pointer font-bold hover:text-white'>About</li>
                            </Link>
                            <Link href={'/service'}>
                                <li className='py-4 cursor-pointer font-bold hover:text-white'>Services</li>
                            </Link>
                            <Link href={'/project'}>
                                <li className='py-4 cursor-pointer font-bold hover:text-white'>Project</li>
                            </Link>
                            <Link href={'/career'}>
                                <li className='py-4 cursor-pointer font-bold hover:text-white'>Career</li>
                            </Link>
                            <Link href={'/contact'}>
                                <li className='py-4 cursor-pointer font-bold hover:text-white'>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='flex flex-row, justify-around pt-10 item-center'>
                        <AiOutlineInstagram size={30} className='cursor-pointer hover:text-white' />
                        <AiOutlineFacebook size={30} className='cursor-pointer  hover:text-white' />
                        <AiOutlineTwitter size={30} className='cursor-pointer hover:text-white' />
                        <AiOutlineMail size={30} className='cursor-pointer hover:text-white' />
                    </div>
                </div>
            </nav>
    );
}

export default Navbar