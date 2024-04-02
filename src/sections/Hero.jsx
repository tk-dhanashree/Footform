import React, { useEffect, useRef } from "react";

const Hero = () => {
    return (
        <>
            <section id='home' className='grid grid-cols-2 mt-28 h-1/2 gap-10 -z-10 overflow-hidden'>
                <div className="col-span-1 grid grid-cols-4">
                    <div className='col-span-1 flex items-center -rotate-90'>
                        <p className="text-9xl font-[Judson]" style={{ color: '#9B99A7', opacity: 0.2 }}>LUXURY</p>
                    </div>
                    <div className='col-span-3 flex flex-col p-16'>
                        <p className="text-5xl font-[Montserrat]">Stand Out. Step Up</p>
                        <div className="mt-5">
                            <p id='text'>
                                Discover luxury footwear with FootForm. Our fashion<br />
                                heels epitomize unparalleled craftsmanship and innovative<br />
                                design, redefining elegance with every step.
                            </p>
                        </div>
                        <button className="bg-gray-300 text-black mt-16 w-52 h-16 px-4 py-2 rounded-2xl hover:bg-[#C7CFF5] font-[Fanwood Text]">KNOW MORE</button>
                    </div>
                </div>
                <div className="col-span-1">
                    {/* <div className='bg-[#ECEBEF] rounded-full h-[958px] w-[958px] -z-10 relative top-1/2 -left-3/4 transform translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[#6D6B7B]'>
                    </div> */}
                </div>
            </section>
            <section id='about' className='grid grid-cols-2 mt-28 h-1/2 gap-10 overflow-hidden'>
                <div className="col-span-1 grid grid-cols-4">
                    <div className='col-span-1 flex items-center -rotate-90'>
                        <p className="text-9xl top- font-[Judson]" style={{ color: '#9B99A7', opacity: 0.2 }}>QUALITY</p>
                    </div>
                </div>
                <div className="col-span-1">
                    {/* <div className='bg-[#ECEBEF] rounded-full h-[958px] w-[958px] z-0 relative top-1/2 -left-3/4 transform translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[]'> */}
                        <div className='flex flex-col py-40'>
                            <p className="text-[45px] font-[Montserrat]">Craftsmanship Beyond<br />Compare</p>
                            <p id='text' className="mt-5">
                                Experience the epitome of perfection with our<br />
                                impeccable craftsmanship. Each pair of FootForm heels is<br />
                                a testament to our dedication to quality and detail.
                            </p>
                        </div>
                    {/* </div> */}
                </div>
            </section>
            <section id='home' className='grid grid-cols-2 mt-28 h-1/2 gap-10 overflow-hidden'>
                <div className="col-span-1 grid grid-cols-4">
                    <div className='col-span-1 flex items-center -rotate-90 -mt-20'>
                        <p className="text-9xl font-[Judson]" style={{ color: '#9B99A7', opacity: 0.2 }}>STYLE</p>
                    </div>
                    <div className='col-span-3 flex flex-col py-72'>
                        <p className="text-5xl font-[Montserrat]">Discover Your<br />Signature Style</p>
                        <div className="mt-5">
                            <p id='text'>
                                Whether you're strutting into the boardroom or<br />
                                dancing the night away, FootForm has the perfect<br />
                                pair of heels to complement your unique<br />
                                personality and flair.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    {/* <div className='bg-[#ECEBEF] rounded-full h-[958px] w-[958px] z-0 relative top-1/2 -left-3/4 transform translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[#6D6B7B]'>
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default Hero;
