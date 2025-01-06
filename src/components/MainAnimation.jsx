// src/components/MainAnimation.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';

const MainAnimation = () => {
    const stickyWrapRef = useRef(null);
    const stickyElementRef = useRef(null);
    const playgroundRef = useRef(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0, moved: false });
    const [rect, setRect] = useState({});

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        // Cache DOM Elements
        const stickyWrap = stickyWrapRef.current;
        const stickyElement = stickyElementRef.current;
        const playground = playgroundRef.current;

        // Optimize Sticky Circle Grow
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: stickyWrap,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });

        tl.fromTo(
            stickyElement,
            { width: "35em", height: "35em", borderRadius: "35em" },
            { width: "100vw", height: "100vh", borderRadius: "3em" }
        );

        // GSAP Scroll Animation
        gsap.to("#octopus", {
            duration: 10,
            motionPath: {
                path: "#motionPath",
                align: "#motionPath",
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
            scrollTrigger: {
                trigger: "#motionPath",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            ease: "power1.inOut",
        });

        // Parallax Effect
        const handleMouseMove = (e) => {
            setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, moved: true });
        };

        playground.addEventListener('mousemove', handleMouseMove);

        const ticker = gsap.ticker.add(() => {
            if (mouse.moved) {
                parallaxIt(".hero_illustr-wrap", -50);
                setMouse((prev) => ({ ...prev, moved: false }));
            }
        });

        function parallaxIt(target, movement) {
            gsap.to(target, {
                duration: 0.5,
                x: ((mouse.x - rect.width / 2) / rect.width) * movement,
                y: ((mouse.y - rect.height / 2) / rect.height) * movement,
            });
        }

        const handleResizeScroll = () => {
            setRect(playground.getBoundingClientRect());
        };

        window.addEventListener("resize", handleResizeScroll);
        window.addEventListener("scroll", handleResizeScroll);

        // Cleanup
        return () => {
            playground.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener("resize", handleResizeScroll);
            window.removeEventListener("scroll", handleResizeScroll);
            gsap.ticker.remove(ticker);
        };
    }, [mouse, rect]);

    return (
        <div ref={playgroundRef}>
            <div ref={stickyWrapRef} className="sticky-circle_wrap">
                <div ref={stickyElementRef} className="sticky-circle_element">
                    {/* You can add your sticky circle content here */}
                </div>
            </div>
        </div>
    );
};

export default MainAnimation;