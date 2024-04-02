import React, { useEffect, useRef } from "react";
// import SplitType from 'split-type';
// import gsap from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";

const HeroLuxury = () => {

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let lines = new SplitType('#text', { types: 'lines' });

  //   lines.lines.forEach((line, index) => {
  //     gsap.from(line, {
  //       rotateX: 360,
  //       opacity: 0,
  //       delay: index * 0.5,
  //       duration: 2,
  //       ease: 'power3.out',
  //       scrollTrigger: {
  //         trigger: line,
  //         start: "top",
  //         end: "bottom",
  //         toggleActions: "none none none none",
  //         markers: true
  //       }
  //     });
  //   });
  // }, []);

  return (
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
        <div className='bg-[#ECEBEF] rounded-full h-[958px] w-[958px] -z-10 relative top-1/2 -left-3/4 transform translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[#6D6B7B]'>
        </div>
      </div>
    </section>
  );
};

export default HeroLuxury;
