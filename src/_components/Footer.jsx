import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <section className='footer_container bg-zinc-200 px-[4%]'>
            <div className="container mx-auto">
                <div className="footer py-10 flex items-start gap-6">
                    <div className="left w-1/3 flex flex-col gap-6">
                        <Link><img src={logo} alt="" className='w-52'/></Link>
                        <p className='font-[Rubik] leading-7 text-zinc-600 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quidem quasi, tempore quis blanditiis adipisci voluptatum tenetur ratione doloremque nisi nihil perferendis, tempora iste, consectetur esse earum modi autem quae!</p>
                    </div>
                    <div className="middle w-1/3 flex flex-col gap-5 justify-center">
                        <p className='font-semibold text-xl font-[Rubik]'>Quick Links</p>
                        <ul className='flex flex-col gap-4 items-start'>
                            <li><Link>Home</Link></li>
                            <li><Link>About us</Link></li>
                            <li><Link>Contact us</Link></li>
                            <li><Link>Products</Link></li>
                        </ul>
                    </div>
                    <div className="right w-1/3 flex flex-col gap-2">
                        <p className='font-semibold text-xl font-[Rubik]'>NEWSLETTERS</p>

                        <div className="box flex flex-col gap-4">
                            <p className='text-zinc-600'>Join 40+ Subscribers and get a new discount coupon.</p>
                            <div className="input_div flex items-center">
                                <Input placeholder='Your email address...' className={`border border-black border-r-0 outline-none rounded-sm rounded-r-none`}/>
                                <Button className={`bg-black text-white rounded-l-none cursor-pointer hover:bg-amber-600`}><MdOutlineMail /></Button>
                            </div>
                            <div className="icons flex items-center gap-4">
                                <a href='#' className="icon w-10 h-10 border border-zinc-400 rounded-4xl flex items-center justify-center hover:translate-y-[-5px] duration-300">
                                    <FaFacebookF className='text-xl'/>
                                </a>
                                <a href='#' className="icon w-10 h-10 border border-zinc-400 rounded-4xl flex items-center justify-center hover:translate-y-[-5px] duration-300">
                                    <RiInstagramFill className='text-xl'/>
                                </a>
                                <a href='#' className="icon w-10 h-10 border border-zinc-400 rounded-4xl flex items-center justify-center hover:translate-y-[-5px] duration-300">
                                    <FaLinkedinIn  className='text-xl'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-5 bg-black px-[4%]'>
            <div className="container mx-auto">
                <div className="copy flex items-center justify-between">
                    <div className="left">
                        <p className='text-white font-[Rubik]'>&copy; All Rights Reserved.</p>
                    </div>
                    <div className="right flex items-center gap-5">
                        <Link className='text-white font-[Rubik]'>Terms & Condition</Link>
                        <Link className='text-white font-[Rubik]'>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer