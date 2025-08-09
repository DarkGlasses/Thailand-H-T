import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { name: 'หน้าหลัก', link: '/' },
        { name: 'ทัวร์ไทย',  link: '/Tour' },
        { name: 'ติดต่อ', link: '/About' }
    ]

    return (
        <>
            <header className='bg-teal-600 text-white p-2 flex-col-2'>
                <div className='container mx-auto py-2'>
                    <div className='flex item-center justify-between'>
                        <div className='flex items-center'>
                            <img src="logo.png" alt="" className='inline-block mr-2 w-20' />
                            <h1 className='text-2xl font-bold text-black'>Thailand H&T</h1>
                        </div>

                        <button className='block lg:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-3xl`}></i>
                        </button>

                        {/* Desktop Navigation Menu */}
                        <nav className='hidden lg:flex items-center space-x-8'>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.link}
                                    className='text-lg hover:text-gray-300 transition-all duration-300 font-semibold hover:bg-teal-700 rounded-2xl p-5
                                    '
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Navigation Menu */}
                        <nav className={`lg:hidden absolute left-0 top-0 w-2/5 bg-teal-700 text-white h-full ${isMenuOpen ? 'block' : 'hidden'} z-50`}>
                            <div className='px-5 p-5'>
                                <img src="logo.png" alt="logo" className='inline-block mr-2 w-20' />
                                <h1 className='text-2xl font-bold text-black'>Thailand H&T</h1>
                                <hr className='border-t-5 border-teal-800 '/>
                            </div>  
                            <div className='p-4'>
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.link}
                                        className='block text-lg py-2 hover:text-gray-300 transition-all duration-300 font-semibold hover:bg-teal-800 rounded p-3'
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header