import React from 'react'

function Header() {
  return (
    <div className='pt-20'>
        <div>

            <div>
                <h1 className='text-indigo-600 md:text-4xl text-2xl text-center'>
                    NavBar Responsive Design
                </h1>
            </div>
            <div className='flex justify-center pt-10'>
                <a href="/" className='text-indigo-600 border border-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition'>
                    Get Started
                </a>
            </div>

        </div>
    </div>
  )
}

export default Header