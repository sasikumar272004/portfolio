'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Initial fade in of the nav
      gsap.to('.n', {
        opacity: 1,
        delay: 4.2,
        duration: 0.1,
      });

      // ScrollTrigger to handle hiding and showing the nav
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        onUpdate: (self) => {
          if (self.direction === -1) {
            // Scrolling up
            gsap.to('.n', { opacity: 1, duration: 0.1 });
          } else {
            // Scrolling down
            gsap.to('.n', { opacity: 0, duration: 0.1 });
          }
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="z-50 n opacity-0 fixed top-0 w-full bg-white">
      <a href="#page0" className="ui-btn home my-3">
        <span>SASI</span>
      </a>
      <div className="nav flex justify-between py-3 text-[#a4a3a3] px-10 z-[15000]">
        <div className="flex">
          <a href="#page2" className="ui-btn">
            <span>About</span>
          </a>
          <a href="#page5" className="ui-btn">
            <span>Skills</span>
          </a>
          <a href="#pro" className="ui-btn">
            <span>Projects</span>
          </a>
          <a href="#end" className="ui-btn">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
