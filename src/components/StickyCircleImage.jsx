// src/components/StickyCircleImage.jsx
import React, { useEffect, useRef } from 'react';
import img5 from '../assets/image/Chatbot.webp';
import { gsap } from 'gsap';
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';

const StickyCircleImage = () => {
//   const stickyWrapRef = useRef(null);
//   const stickyElementRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

//     // Optimize Sticky Circle Grow
//     const stickyWrap = stickyWrapRef.current;
//     const stickyElement = stickyElementRef.current;

//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: stickyWrap,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//       },
//     });

//     tl.fromTo(
//       stickyElement,
//       { width: "35em", height: "35em", borderRadius: "35em" },
//       { width: "100vw", height: "100vh", borderRadius: "3em" }
//     );

    // Cleanup function
//     return () => {
//       // Kill the timeline if needed
//       tl.kill();
//     };
//   }, []);

  return (
    <div className="section-slide mod--9">
      <div className="section is--header">
        <div className="container is--header">
          {/* <div ref={stickyWrapRef} className="sticky-circle_wrap"> */}
          <div  className="sticky-circle_wrap">
            <div className="sticky-circle">
              {/* <div ref={stickyElementRef} className="sticky-circle_element"> */}
              <div  className="sticky-circle_element">
                <div className="cta_circle"></div>
                <img
                  src={img5}
                  sizes="100vw"
                  alt="Chat Bot"
                  className="sticky-circle_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCircleImage;