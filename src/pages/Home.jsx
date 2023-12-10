import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero1 from '../assets/img/Carousel.webp'
import Prod1 from '../assets/img/products/Rectangle3.webp'
import Prod2 from '../assets/img/products/Rectangle4.webp'
import Prod3 from '../assets/img/products/Rectangle5.webp'
import Prod4 from '../assets/img/products/Rectangle6.webp'
import New1 from '../assets/img/products/NewProd1.webp'
import New2 from '../assets/img/products/NewProd2.webp'
import New3 from '../assets/img/products/NewProd3.webp'
import New4 from '../assets/img/products/NewProd4.webp'
import CoffeeBean from '../assets/img/CoffeBean.webp'
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
                        <img src={Prod1} alt="Special1"  className='rounded-md'/>
                    </a>
                </div>
                    <div>
                    <a href="#">
                        <img src={Prod2} alt="Special2"  className='rounded-md'/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={Prod3} alt="Special3" className='rounded-md'/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={Prod4} alt="Special4" className='rounded-md'/>
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
                    <button className='text-light'onClick={() => navigate('/menu')}>View more</button>
                </div>
            </div>
            <div className='flex justify-between gap-6 mt-5'>
                <div>
                    <a href="#">
                        <img src={New1} alt="New1"  className='rounded-md'/>
                    </a>
                </div>
                    <div>
                    <a href="#">
                        <img src={New2} alt="New2"  className='rounded-md'/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={New3} alt="New3" className='rounded-md'/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={New4} alt="New4" className='rounded-md'/>
                    </a>
                </div>
            </div>
        </div>
        {/* New Products End */}

        {/* Promotional Space Start */}
        <div className='flex justify-between bg-primary'>
            <div className='pl-20 py-7 w-2/5' >
                <h1 className='text-3xl text-light font-semibold'>See Our Latest Products</h1>
                <p className='text-light mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo euismod, maximus purus id, dictum augue. Donec ornare tortor nulla, sollicitudin laoreet purus suscipit et. In pretium et ex quis pulvinar. Praesent in nisi purus. Pellentesque purus purus, euismod quis mauris vitae, posuere venenatis purus. Duis tincidunt est orci, a porta ex commodo id.</p>
                <button className='bg-secondary py-1 px-2 rounded mt-4 text-light font-semibold' onClick={() => navigate('/products')}>See Products</button>
            </div>
            <div className='bg-secondary w-1/2 my-7 rounded-l-xl'>
                <img src={CoffeeBean} alt="Coffee-Bean-Cup" className='rounded-l-lg'/>
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
