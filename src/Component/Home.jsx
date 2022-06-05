import React from 'react'
import Products from './Products'
import TypeWriter from 'react-typewriter';
import { Typewriter } from 'react-simple-typewriter'
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
    return (
        <div className='Hero'>
            <div className=" bg-light text-white border-1">
                <hr></hr> </div>
                
            
            <div className="card bg-light text-white border-2">
                  
                <img src="/assets/bg.jpg" className="card-img" alt="Background" height="250px" opacity="0.3" />
             
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: '#9acd32	',
                                fontWeight: 500,
                                fontSize: '3em',
                            }}
                            startDelay={2000}
                            cursorColor="#E7B117"
                            multiText={[
                                'NEW SEASON ARRIVALS CHECK OUT ALL THE TRENDS',
                                'FREE WORLDWIDE SHIPPING ON ORDERS OVER $99',
                                'APPLY THIS COUPON CODE FOR 15% OFF ANY PURCHASE','NEW SEASON ARRIVALS CHECK OUT ALL THE TRENDS',
                                'FREE WORLDWIDE SHIPPING ON ORDERS OVER $99',
                                'APPLY THIS COUPON CODE FOR 15% OFF ANY PURCHASE',
                                'NEW SEASON ARRIVALS CHECK OUT ALL THE TRENDS',
                                'FREE WORLDWIDE SHIPPING ON ORDERS OVER $99',
                                'APPLY THIS COUPON CODE FOR 15% OFF ANY PURCHASE',
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={30}
                        />
                        
                        {/* <TypeWriter typing={1} typeSpeed={100}   >
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                            
                        </TypeWriter> */}

                    </div>

                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home
