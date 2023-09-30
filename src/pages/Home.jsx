import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <header>
        <NavBar/>
    </header>

    <body>
        {/* Hero Banner Start */}
        <div className='flex justify-center w-full h-96 bg-primary'>
            <div className='flex flex-col justify-center'>
                <h1>
                    Banner Goes Here
                </h1>
            </div>
        </div>
        {/* Hero Banner End */}

        {/* Special Menu Start */}
        <div className='px-20 py-7 bg-dark'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-light text-lg font-semibold'>Special this week</h1>
                    <button className='text-light'>View more</button>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
            </div>
        </div>
        {/* Special Menu End */}

        {/* New Products Start */}
        <div className='px-20 py-7 bg-dark'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-light text-lg font-semibold'>New products</h1>
                    <button className='text-light'>View more</button>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
                <div className='w-52 h-52 bg-secondary'>
                    <h1> Image Goes Here </h1>
                </div>
            </div>
        </div>
        {/* New Products End */}

        {/* Promotional Space Start */}
        <div className='flex justify-between bg-secondary'>
            <div className='ml-5'>
                hehehe 1
            </div>
            <div>
                hehehe 2
            </div>
        </div>
        {/* Promotional Space End */}

    </body>

    <footer>
        <Footer/>
    </footer>
    </>
  )
}
