import React, { useEffect, useRef } from "react";
// import SplitType from 'split-type';
// import gsap from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";

const HeroQuality = () => {
  // const text = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

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
  //         start: "top center",
  //         end: "bottom center",
  //         toggleActions: "play none none none",
  //         markers: true
  //       }
  //     });
  //   });
  // }, []);

  return (
    <section id='about' className='grid grid-cols-2 mt-28 h-1/2 gap-10 overflow-hidden'>
      <div className="col-span-1 grid grid-cols-4">
        <div className='col-span-1 flex items-center -rotate-90'>
          <p className="text-9xl top- font-[Judson]" style={{ color: '#9B99A7', opacity: 0.2 }}>QUALITY</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className='bg-[#ECEBEF] rounded-full h-[958px] w-[958px] z-0 relative top-1/2 -left-3/4 transform translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[]'>
        <div className='flex flex-col py-40'>
          <p className="text-[45px] font-[Montserrat]">Craftsmanship Beyond<br />Compare</p>
          <p id='text' className="mt-5">
            Experience the epitome of perfection with our<br />
            impeccable craftsmanship. Each pair of FootForm heels is<br />
            a testament to our dedication to quality and detail.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroQuality;
