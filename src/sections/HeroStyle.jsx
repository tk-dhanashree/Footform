import React, { useEffect, useRef } from "react";
// import SplitType from 'split-type';
// import gsap from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";

const HeroStyle = () => {
  // const text = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

  //   let lines = new SplitType('#text', { types: 'lines' });

  //   lines.lines.forEach((line, index) => {
  //     gsap.from(line, {
  //       rotateX: 360,
  //       opacity: 0,
  //       delay: index * 0.2,
  //       duration: 2,
  //       ease: 'power3.out',
  //       scrollTrigger: {
  //         trigger: text.current,
  //         start: "top 80%", // Start animation when the top of the text is 80% visible
  //         end: "bottom center", // End animation when the text reaches the center of the viewport
  //         toggleActions: "play none none none", // Play the animation once when in view
  //         markers: true //
  //       }
  //     });
  //   });
  // }, []);

  return (
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
        <div className='bg-[#ECEBEF] rounded-full h-[958px] w-[958px] z-0 relative top-1/2 -left-3/4 transform translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[#6D6B7B]'>
        </div>
      </div>
    </section>
  );
};

export default HeroStyle;
