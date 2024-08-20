import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import Image from 'next/image';
import p1 from '@/assests/p1.png';
import p20 from '@/assests/p20.png';
 // import p3 from '@/assests/p3.png';
import p4 from '@/assests/p4.png';
import p5 from '@/assests/p5.png';
import p6 from '@/assests/p6.png';
import p10 from '@/assests/p10.png';
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {

      let tl4 = gsap.timeline({
        scrollTrigger:{
          trigger:".page6",
          start:"50% 50%",
          end:"300% 50%",
          pin:true,
          scrub:2,
        }
      });
      tl4.to(".owd",{
        height:"60vh",

      }, 'h')

      tl4.to(".owt",{
        height:"60vh",
        
      }, 'h')

      tl4.to(".my",{
        left:"0%",
        
      }, 'h')

      tl4.to(".proj",{
        right:"0%",
        
      }, 'h')

      tl4.to(".sd",{
        marginTop:"-60vh",
        
      },'q')

      tl4.to(".p1",{
        y:"-130vh"
      },'h')

       
      tl4.to(".p2",{
        y:"-130vh"
      },'h')
      
      tl4.to(".p2",{
        y:"-200vh"
      },'q')

       

      gsap.to(".p1",{
        rotate:360,
        duration:5,
        ease:"linear",
        repeat:-1,
      })
     

    });
    return () => ctx.revert();  
  }, []);

  return (
     <>
    
      <div id='pro' className='h-[100vh] page6 bg-black text-yellow-50 flex items-center justify-center -z-10 overflow-visible'>
           <div className='owt absolute h-[0vh] w-[60vw]  overflow-visible  '>
            <h1 className='my absolute top-0 left-[33%] -translate-x-[20%] -translate-y-[50%] text-6xl z-50'>MY</h1>
            <h1 className='proj absolute bottom-0 right-[33%] translate-x-[30%] translate-y-[50%] text-6xl z-50'>PROJECTS</h1>
           </div>
           <div className='owd overflow-hidden flex justify-center items-center w-[60vw] h-[0vh]  '>
              <div className='sw w-full h-[60vh] overflow-hidden'>
                <div className='sd overflow-hidden'>
                  <div className='bg-yellow-950 h-[60vh] w-[70vw]  '></div>
                  <div className='bg-yellow-50 h-[60vh] w-[70vw]'></div>
                </div>
              </div>
           </div>
           <Image src={p5} className='h-[300px] w-[300px] p1 absolute top-[10%] left-[5%]' />
           <Image src={p4} className='h-[180px] w-[160px] p2 absolute top-[70%] right-[20%] ' />
           <Image src={p1} className='h-[150px] w-[250px] p2 absolute top-[120%] left-[6%] ' />
           <Image src={p10} className='h-[100px] w-[200px] p2 absolute top-[170%] right-[8%]' />
           <Image src={p6} className='h-[250px] w-[250px] p2 absolute top-[220%] left-[8%]' />
           <Image src={p20} className='h-[250px] w-[200px] p2 absolute top-[250%] right-[7%] ' />
        </div>


      

     </>
  )
}

export default Project