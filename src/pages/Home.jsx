import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero1 from '../assets/img/Carousel.webp'
import Prod1 from '../assets/img/products/Rectangle3.webp'
import Prod2 from '../assets/img/products/Rectangle4.webp'
import Prod3 from '../assets/img/products/Rectangle5.webp'
import Prod4 from '../assets/img/products/Rectangle6.webp'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

  return (
    <>
    <header>
        <NavBar/>
    </header>

    <body>
        {/* Hero Banner Start */}
        <div className='flex justify-center w-full bg-primary'>
            <div className='flex flex-col justify-center'>
                <img src={Hero1} alt="Hero-Banner-1" />
            </div>
        </div>
        {/* Hero Banner End */}

        {/* Special Menu Start */}
        <div className='px-20 py-7 bg-dark'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-light text-lg font-semibold'>Special this week</h1>
                    <button className='text-light' onClick={() => navigate('/menu')}>View more</button>
                </div>
            </div>
            <div className='flex justify-between gap-6 mt-5'>
                <div>
                    <a href="#">
                        <img src={Prod1} alt=""  className='rounded-md'/>
                    </a>
                </div>
                    <div>
                    <a href="#">
                        <img src={Prod2} alt=""  className='rounded-md'/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={Prod3} alt="" className='rounded-md'/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={Prod4} alt="" className='rounded-md'/>
                    </a>
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
        <div className='flex justify-between bg-primary'>
            <div className='pl-20 py-7 w-2/5' >
                <h1 className='text-3xl text-light font-semibold'>See Our Latest Products</h1>
                <p className='text-light mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo euismod, maximus purus id, dictum augue. Donec ornare tortor nulla, sollicitudin laoreet purus suscipit et. In pretium et ex quis pulvinar. Praesent in nisi purus. Pellentesque purus purus, euismod quis mauris vitae, posuere venenatis purus. Duis tincidunt est orci, a porta ex commodo id.</p>
                <button className='bg-secondary py-1 px-2 rounded mt-4 text-light font-semibold'>See Products</button>
            </div>
            <div className='bg-secondary w-1/2 my-7 rounded-l-xl'>
                Image Goes Here
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
