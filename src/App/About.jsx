import React from 'react'

import { FaLaptopCode } from "react-icons/fa6";
import { LuQrCode } from "react-icons/lu";
import { TbDeviceDesktopCode } from "react-icons/tb";

function About() {
  return (
    <div className='pt-20'>
        <div>

            <div className='flex justify-center items-center'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

                    <div className='px-20 pb-10'>
                        <div className='logo flex justify-center text-8xl text-indigo-700'>
                            <FaLaptopCode />
                        </div>
                        <div>
                            <h1 className='text-center text-indigo-700 text-2xl'>
                                Codeing
                            </h1>
                        </div>
                    </div>

                    <div className='px-20 pb-10'>
                        <div className='logo flex justify-center text-8xl text-indigo-700'>
                            <LuQrCode />
                        </div>
                        <div>
                            <h1 className='text-center text-indigo-700 text-2xl'>
                                Qr
                            </h1>
                        </div>
                    </div>

                    <div className='px-20 pb-10'>
                        <div className='logo flex justify-center text-8xl text-indigo-700'>
                            <TbDeviceDesktopCode />
                        </div>
                        <div>
                            <h1 className='text-center text-indigo-700 text-2xl'>
                                Computer
                            </h1>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default About