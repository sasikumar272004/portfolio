'use client'
import React, { useEffect, useRef } from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import text from '@/assests/text.png';
import pic from '@/assests/pic.png';

const headingsSASI = [
  { finalLetter: "S", delay: 4000 },
  { finalLetter: "A", delay: 4050 },
  { finalLetter: "S", delay: 4100 },
  { finalLetter: "I", delay: 4150 },
];

const headingsWEB = [
  { finalLetter: "W", delay: 4150 },
  { finalLetter: "E", delay: 4250 },
  { finalLetter: "B", delay: 4400 },
];

const headingsDEVELOPER = [
  { finalLetter: "D", delay: 4150 },
  { finalLetter: "E", delay: 4200 },
  { finalLetter: "V", delay: 4250 },
  { finalLetter: "E", delay: 4300 },
  { finalLetter: "L", delay: 4350 },
  { finalLetter: "O", delay: 4400 },
  { finalLetter: "P", delay: 4450 },
  { finalLetter: "E", delay: 4500 },
  { finalLetter: "R", delay: 4550 },
];

function HomePage() {

  useEffect(() => {
    let ctx = gsap.context(() => {

      
    gsap.to(".c1", {
      scale: 13,
      scrollTrigger: {
        trigger: ".page1",
        start: "top 0%",
        end: "top -15%",
        scroller: "body",  
        pin:true,
        scrub: 3,
      }
    });
    
    gsap.to(".page1",{
      z:"-10",
      scrollTrigger:{
        trigger:".page1",
        start:"top -1%",
        scrub:1,
      }
    })
     
    
    gsap.to(".page2", {
      opacity: 1,
      zIndex:'1000',
      scrollTrigger: {
        trigger: ".page1",
        start: "top -1%",
        end: "top -10%",
        pin:true,
        scrub: 3,
      }
    }); 
    
    gsap.to(".ss",{
      opacity:.3,
      duration:1,       
      repeat:-1,
      yoyo:true

    })
  

    gsap.to(".p2l", {
      y:0,
     scrollTrigger: {
       trigger: ".page2",
       start: "bottom 100%",  
       end:"+=30%",
      pin:true,
      pinType:"fixed",
       
       scrub: 3, 
         
     }
   }); 

     gsap.to(".p2l", {
      scale:0,         
      scrollTrigger: {
       trigger: ".page2",
       start: "bottom 99%",  
       end:"+=40%",
       pin:true,
      pinType:"fixed",
         
       
       scrub: 3, 
         
     }
   },);
   
 
      gsap.to(".content", {
        scale:1,
        opacity:1,
       scrollTrigger: {
         trigger: ".page2",
         start: "bottom 98.9%", 
         end:"+=40%",
          
         pin:true,
        pinType:"fixed",
         scrub: 3, 
       
       }
     });

     gsap.to(".content", {
      
      y:0,
     scrollTrigger: {
       trigger: ".page2",
       start: "bottom 97.9%", 
       end:"+=30%",
        
       pin:true,
      pinType:"fixed",
       scrub: 3, 
     
     }
   });

 

    gsap.to(".mvn", {
      transform: 'translateX(-10%)',
      duration: 10,
      ease:"linear",
      repeat:-1,
      yoyo:true
    });
    
    let dl = gsap.timeline();

    dl.to(".d1",{
      opacity:1,
      duration:.15,
      delay:.3
    })
    dl.to(".d1",{
      opacity:0,
      duration:.15,
    })
    dl.to(".d2",{
      opacity:1,
      duration:.15,
    })
    dl.to(".d2",{
      opacity:0,
      duration:.15,
    })
    dl.to(".d3",{
      opacity:1,
      duration:.15,
    })
    dl.to(".d3",{
      opacity:0,
      duration:.15,
    })
    dl.to(".d4",{
      opacity:1,
      duration:.15,
    })
    dl.to(".d4",{
      opacity:0,
      duration:.15,
    })
    dl.to(".d5",{
      opacity:1,
      duration:.15,
    })
    dl.to(".d5",{
      opacity:0,
      duration:.15,
    })
    dl.to(".d6",{
      opacity:1,
      duration:.15,
    })
    dl.to(".d6",{
      opacity:0,
      duration:.15,
    })
    dl.to(".d7",{
      opacity:1,
      duration:.15,
    })
    dl.to(".d7",{
      opacity:0,
      duration:.15,
    })
    dl.to(".d8",{
      opacity:1,
      duration:.15,
    })
    dl.to(".d8",{
      opacity:0,
      duration:.15,
    })
    dl.to(".d9",{
      opacity:1,
      duration:.15,
    })
    dl.to(".d9",{
      opacity:0,
      duration:.15,
    })

    dl.to(".n",{
     
      opacity:0,
      duration:.01,
    },'s')
    dl.to(".d10",{
      opacity:1,
      duration:.1
    },'s')
    dl.to(".d10",{
      scale:20,
      opacity:0,
      duration:.7,
      delay:.2
    })
    
    dl.to(".page0",{
      opacity:0,
      duration:.5,
      delay:.3
    })
    dl.to(".page0",{
      y:-5000,
    })
     
   

 
    
    });
    return () => ctx.revert();  
  }, []);
  
  
  useEffect(() => {  
    
    const stars = document.querySelectorAll('.s');
    stars.forEach((star, i) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.top = `${y}px`;
      star.style.left = `${x}px`;

      gsap.to(star, {
        x: () => Math.random() * 100 - 10,
        y: () => Math.random() * 100 - 10, 
        repeat: -1,  
        yoyo: true,  
        ease: "sine.inOut",  
        duration: () => Math.random() * 2 + 1,  
        delay: i * 0.09  
      });
    });  

    
    
    
 

    
  }, []);

  return (
    <>   
      <div id='page1' data-scroll-container className='page1 h-[100vh] z-0  bg-[#000000] overflow-hidden  ' >
      
    

        <div className='bg-black h-[100vh] w-[100vw] text-[100px] page0  text-center load font-baro z-[200] '>

          <div className='d1   absolute top-[10%] left-[20%] bg-[#f9f3f3] rounded-3xl'>10</div>
          <div className='d2  absolute top-[30%] left-[3%] bg-white rounded-3xl'>20</div>
          <div className='d3  absolute top-[20%] right-[10%] bg-white rounded-3xl'>30</div>
          <div className='d4  absolute bottom-[5%] left-[30%] bg-white rounded-3xl'>40</div>
          <div className='d5  absolute top-[3%] right-[20%] bg-white rounded-3xl'>50</div>
          <div className='d6  absolute bottom-[20%] right-[2%] bg-white rounded-3xl'>60</div>
          <div className='d7  absolute bottom-[5%] right-[25%] bg-white rounded-3xl'>70</div>
          <div className='d8  absolute top-[2%] left-[50%] bg-white rounded-3xl'>80</div>
          <div className='d9  absolute top-[60%] left-[10%] bg-white rounded-3xl'>90</div>
          <div className='d10  absolute text-[150px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-0 bg-transparent text-[#d4d4ce] z-50 rounded-3xl'>100</div>
          <div className='n absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-buda text-[#d4d4ce] text-[60px] whitespace-nowrap z-0 font-bold'>POPCORN READY..?? <br></br>  <h1 className='nn text-[90px] h-[120px] overflow-hidden '><p> ENJOY THE SHOW !!</p> </h1></div>
        </div>
        
        <div className='absolute left-[5%] top-[15%]'>
          <div className="sinfo flex flex-col items-start justify-center space-y-5 h-[50vh]">
            <div className="text-7xl flex gap-6">
              <h1 className='text-[#dedddd]'>I'm</h1>
              <div className="flex font-light font-unco text-[#f9f8e2]">
                {headingsSASI.map((heading, index) => (
                  <AnimatedHeading
                    key={`SASI-${index}`}
                    finalLetter={heading.finalLetter}
                    delay={heading.delay}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-8 text-7xl font-bold">
              <h1 className='font-light text-[#dedddd]'>A</h1>
              <div className="flex font-unco font-light text-[#f9f8e2]">
                {headingsWEB.map((heading, index) => (
                  <AnimatedHeading
                    key={`WEB-${index}`}
                    finalLetter={heading.finalLetter}
                    delay={heading.delay}
                  />
                ))}
              </div>
              <div className="flex font-unco font-light text-[#f9f8e2]">
                {headingsDEVELOPER.map((heading, index) => (
                  <AnimatedHeading
                    key={`DEVELOPER-${index}`}
                    finalLetter={heading.finalLetter}
                    delay={heading.delay}
                  />
                ))}
              </div>
            </div>
            <div>
              <h1 className='w-[500px] text-2xl p1cap text-[#dedddd]'>
                Innovating at the intersection of creativity and technology to deliver exceptional web experiences.
              </h1>
            </div>
          </div>
        </div>
        <div className='text-white absolute bottom-[15%]  left-[45%]  ss'><h1>SCROLL SLOWLY </h1></div>
        <div className='absolute bottom-[3%] text-[#dedddd]'>
          <div className='mvn w-[20000px] flex gap-5 text-6xl font-bold'>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
            <h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1><h1 className="text-stroke text-fill-color">CRAFTING CODE AND CREATIVITY</h1>
            <h1>◉</h1>
          </div>
        </div>
 
        <div className='absolute top-10 right-[-2%] vizag'>
          <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="curve"
                d="
                  M 125, 75
                  A 50, 50 0 1, 1 124.9, 75
                "
                fill="none"
                stroke="none"
              />
            </defs>
            <text fontSize="20" fill="white" textAnchor="middle" className='font-baro'>
              <textPath href="#curve" startOffset="10%" className='text-yellow-50'>
                VIZAG
              </textPath>
              <textPath href="#curve" startOffset="30%" className='text-yellow-50'>
                VIZAG
              </textPath>
              <textPath href="#curve" startOffset="50%" className='text-yellow-50'>
                VIZAG
              </textPath>
              <textPath href="#curve" startOffset="90%" className='text-yellow-50'>
                VIZAG
              </textPath>
              <textPath href="#curve" startOffset="70%" className='text-yellow-50'>
                VIZAG
              </textPath>
            </text>
            <circle cx="125" cy="125" r="25" fill="none" />
            <text x="125" y="130" fontSize="30" fill="white" textAnchor="middle" dominantBaseline="middle">
              🌏
            </text>
          </svg>
        </div>
        {[...Array(40)].map((_, i) => (
         <svg className='s  absolute' width="10" height="10" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16.5 0C16.5 0 16.3243 9.25397 20.0352 12.9648C23.746 16.6757 33 16.5 33 16.5C33 16.5 23.746 16.3243 20.0352 20.0352C16.3243 23.746 16.5 33 16.5 33C16.5 33 16.6757 23.746 12.9648 20.0352C9.25397 16.3243 0 16.5 0 16.5C0 16.5 9.25397 16.6757 12.9648 12.9648C16.6757 9.25397 16.5 0 16.5 0Z" fill="#fff"></path>
       </svg>
        ))}

        <div className='c'>
          <div className='c1 h-[400px] w-[400px] z-10 rounded-full filter blur-2xl absolute bottom-[-20%] right-[-5%]'></div>
          <div className='c2 h-[400px] w-[400px] z-10 rounded-full filter blur-2xl absolute bottom-[-25%] right-[5%]'></div>
          <div className='c3 h-[500px] w-[500px] z-10 rounded-full filter blur-2xl absolute bottom-[-10%] right-[-20%]'></div>
          <div className='c4 h-[400px] w-[400px] z-10 rounded-full filter blur-2xl absolute bottom-[-45%] right-[20%]'></div>
          <div className='c4 h-[400px] w-[400px] z-10 rounded-full filter blur-2xl absolute bottom-[-45%] right-[15%]'></div>
        </div>       
      </div>
     
      <div id='page2' className='page2 absolute top-0 h-[101vh] w-[100vw] bg-[#d4d4ce] opacity-0 z-50  overflow-hidden'>
    
      
      {[...Array(40)].map((_, i) => (
        <svg key={i} className='s absolute' width="10" height="10" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 0C16.5 0 16.3243 9.25397 20.0352 12.9648C23.746 16.6757 33 16.5 33 16.5C33 16.5 23.746 16.3243 20.0352 20.0352C16.3243 23.746 16.5 33 16.5 33C16.5 33 16.6757 23.746 12.9648 20.0352C9.25397 16.3243 0 16.5 0 16.5C0 16.5 9.25397 16.6757 12.9648 12.9648C16.6757 9.25397 16.5 0 16.5 0Z" fill="#000000"></path>
        </svg>
      ))}

      <Image src={text} className='absolute bottom-[15%] left-0 p2l scale-[1] h-[60vh] w-[100vw]  opacity-1 p-0' alt="text" />
       <Image src={pic} className='absolute bottom-0   p2l h-[100vh] w-[30vw] mx-[35%] opacity-1 p-0' alt="pic" />
      
      <div className='h-[100vh] flex justify-center items-center content scale-[10] opacity-0 overflow-hidden'>
        <h1 className="text-6xl opacity-1 text-[#453535] font-buda px-[5%] text-center p2des">
          I’m <span className="font-bold"> Sasi Kumar Kolli</span>, a web developer from Vizag and a student at
          <span className="font-semibold"> GITAM University</span>. With a strong front-end skill set and a dash of back-end knowledge. My creativity knows no bounds,
          While my true passion lies in the front end, where I can unleash my creativity, I also enjoy exploring back-end technologies to enhance my versatility as a developer.
          <br /> 
          <h1 className='pt-11 font-buda font-extrabold text-[#352424]'>Let's CREATE MAGIC !!</h1>
        </h1>
      </div>
    </div>
       
 

 
    </>
  );
}

export default HomePage;




 