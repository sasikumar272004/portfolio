'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from "gsap/Observer";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from 'next/image';
import text2 from '@/assests/text2.png';
import pic2 from '@/assests/pic2.png';
import v from '@/assests/v.mp4';
 
gsap.registerPlugin(ScrollTrigger, Observer, MotionPathPlugin);
 const Page4 = () => {
    
  useEffect(() => {

    const stars = document.querySelectorAll('.st');
    stars.forEach((star, i) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.top = `${y}px`;
      star.style.left = `${x}px`;

      gsap.to(star, {
        x: () => Math.random() * 80 - 10,
        y: () => Math.random() * 80 - 10, 
        repeat: -1,  
        yoyo: true,  
        ease: "sine.inOut",  
        duration: () => Math.random() * 2 + 1,  
        delay: i * 0.05  
      });
    }); 
 

    let ctx = gsap.context(() => {
      gsap.from(".p", {
         y:-2000,
         duration:.5,
        scrollTrigger: {
          trigger: ".page2",
          start: "bottom 10%",                  
  
          ease:"bounce.out",
           
        }
      });
      
       

      const page5Trigger = {
        trigger: ".page5",
        start: "top 10%",
      };
      
      gsap.to('.ta', {
        width: "225px",
        duration: 1.5,
        ease: 'steps(30)',
        scrollTrigger: page5Trigger,
      });

      gsap.to('.ta', {
        borderRight:"0px",
        delay:2,
        duration: .1,
        ease: 'steps(30)',
        scrollTrigger: page5Trigger,
      });

      gsap.to(".mvgp9",{
        opacity:0,
        delay:5,
        duration:.01,
        scrollTrigger: page5Trigger,
      });
      gsap.to(".p",{
        opacity:1,
        delay:5.2,
        duration:.01,        
        scrollTrigger: page5Trigger,
      })
      gsap.to(".skills",{
        opacity:1,
        delay:5.5,
        duration:.01,        
        scrollTrigger: page5Trigger,
      })
      
      const paragraphs = document.querySelectorAll('.mvgp1,.mvgp2,.mvgp3,.mvgp4,.mvgp5,.mvgp6,.mvgp7,.mvgp8,.mvgp9,.mvgp10');
      const timeline = gsap.timeline({
        scrollTrigger: page5Trigger,
      });
      
      timeline
       .add(() => {
           gsap.delayedCall(3, () => {
            paragraphs.forEach((p, index) => {
              timeline
               .set(paragraphs, { display: 'none' })  
               .set(p, { display: 'block' })  
               .to(p, { autoAlpha: 1, duration: 0.02 }) 
               .to(p, { autoAlpha: 1, duration: 0.02, })       
            });
          });
        });
      
       
      timeline.set(paragraphs, { display: 'none' });
      
    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, []);

  

  return (
    <>
    <div   className='h-[250vh] relative  page4 bg-[#000000]'
    style={{clipPath:"polygon(0% 0, 100% 0, 100% 100%, 0% 100%"}}>
      <div className='fixed h-[100vh] w-full bottom-0'> 
      
        <Image src={text2}   className=' t h-[90vh] w-[150vw] absolute  mx-10  bottom-10'></Image>
        <Image src={pic2}   className='p h-[90vh] w-[40vw] absolute  mx-[25%]  bottom-[-1%]'></Image>    


        {[...Array(40)].map((_, i) => (
          <div key={i} className='st h-[5px] w-[5px]  bg-[#272121] absolute rounded-full'></div>
        ))}         
          
        <div className='h-[200vh] w-[200vw] opacity-[.2] absolute bottom-0 -z-10'>
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src={v} type="video/mp4" />
          </video>
        </div>
          
      </div>      
    </div>

    <div id='page5' className='h-[100vh] relative  page5 bg-[#141313]'  style={{clipPath:"polygon(0% 0, 100% 0, 100% 100%, 0% 100%"}}>
      <div className='fixed h-[100vh]  w-full bottom-0'> 

        <aside class="bg-black text-white p-6 rounded-lg w-[95vw] mx-[3%] mt-[2%] h-[90vh] font-mono">
          <div class="flex justify-between items-center">
            <div class="flex space-x-2 text-red-500">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p class="text-sm">bash</p>
          </div>
          <div class="mt-4 relative">
            <p class="text-green-400  ta">$ npm install Sasi-skills</p>
            <p class="mvgp1 text-white  absolute  "><span  className='dots'>[...........]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp2 text-white   absolute "><span  className='dots'>[####......]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp3 text-white  absolute "><span  className='dots'>[######.....]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp4 text-white  absolute "><span  className='dots'>[#########....]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp5 text-white  absolute "><span  className='dots'>[#############]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp6 text-white  absolute  "><span  className='dots'>[...........]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp7 text-white   absolute "><span  className='dots'>[####......]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp8 text-white  absolute "><span  className='dots'>[######.....]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp9 text-white  absolute "><span  className='dots'>[#########....]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp10 text-white  absolute "><span  className='dots'>[#############]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp9 text-white  absolute "><span  className='dots'>[#########....]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp1 text-white  absolute  "><span  className='dots'>[...........]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp2 text-white   absolute "><span  className='dots'>[####......]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp3 text-white  absolute "><span  className='dots'>[######.....]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp4 text-white  absolute "><span  className='dots'>[#########....]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp5 text-white  absolute "><span  className='dots'>[#############]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp6 text-white  absolute  "><span  className='dots'>[...........]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp7 text-white   absolute "><span  className='dots'>[####......]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp8 text-white  absolute "><span  className='dots'>[######.....]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp9 text-white  absolute "><span  className='dots'>[#########....]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp10 text-white  absolute "><span  className='dots'>[#############]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp9 text-white  absolute "><span  className='dots'>[#########....]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p><p class="mvgp1 text-white  absolute  "><span  className='dots'>[...........]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp2 text-white   absolute "><span  className='dots'>[####......]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp3 text-white  absolute "><span  className='dots'>[######.....]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp4 text-white  absolute "><span  className='dots'>[#########....]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp5 text-white  absolute "><span  className='dots'>[#############]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp6 text-white  absolute  "><span  className='dots'>[...........]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp7 text-white   absolute "><span  className='dots'>[####......]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp8 text-white  absolute "><span  className='dots'>[######.....]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp9 text-white  absolute "><span  className='dots'>[#########....]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="mvgp10 text-white  absolute "><span  className='dots'>[#############]</span> \ idealTree:Sasi-skills: <span className='bg-white text-stone-950'>still</span> <span className='text-purple-900'>idealTree</span> bulidDeps</p>
            <p class="mvgp9 text-white  absolute "><span  className='dots'>[#############]</span> - reify:@next/SWX-DARWIN-arm24: <span className='bg-[#fbf9f9] text-[#0a0a0a]'>timing</span> <span className='text-purple-900'>reifyingMode:node_modules/@next/sec/sasi-skills :x-64</span> completed in 94ms</p>
            <p class="p opacity-0 text-white">+ Sasi-skills@1.0.0   </p>
            <p class="p opacity-0 text-white">up to date, audited 14 packages in 2s <br></br> found <span className='text-green-400'>0</span> vulnerabilities</p>
            <p class="p opacity-0 py-8 text-white">Displaying skills from Sasi-skills... </p>
            <p className='skills opacity-0'> 
              <span className='vi'>PROGRAMMING</span>  - <br></br> 
             <span className='gr'>Python</span> : Intermediate + <br></br>
             <span className='gr'>Java</span> : Intermediate ++ <br></br>
             <span className='gr'>DSA</span> : Efficient with data structures and strong in algorithm design and analysis.            
            </p>
            <p className='py-8 skills opacity-0'>
            <span className='vi'>WEB DEVELOPMENT</span> - <br></br>
             <span className='gr'>Front-end Developer</span> : Proficient in  <span className='ye'>HTML&CSS</span>, <span className='ye'>JavaScript</span> ,  <span className='ye'>React</span> , <span className='ye'>Redux </span>, <span className='ye'>Next.js</span> , <span className='ye'>Git&GitHub </span>, and API integration. <br></br> Specialized in creating visually appealing, responsive web applications with efficient, maintainable code for enhanced user engagement. <br></br>
             <span  >Bringing creativity to life with <span className='yee'>GSAP</span> , <span className='yee'>Anime.js</span> , <span className='yee'>Framer-Motion</span> , <span className='yee'>Barba.js</span>  and smooth scrolling for engaging websites.</span>

            </p>
            <p className='skills opacity-0'>
             <span className='vi'>AI-Enhanced Developer</span> - <br></br> Skilled in utilizing AI tools such as chatGPT , GitHub Copilot, Kite, and TabNine for faster coding, <br></br> better error detection, and improved code suggestions. Focused on maximizing development efficiency.
            </p>
             
          </div>
        </aside>

 
          {[...Array(20)].map((_, i) => (
          
          <svg className='st  absolute  ' width="8" height="8" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 0C16.5 0 16.3243 9.25397 20.0352 12.9648C23.746 16.6757 33 16.5 33 16.5C33 16.5 23.746 16.3243 20.0352 20.0352C16.3243 23.746 16.5 33 16.5 33C16.5 33 16.6757 23.746 12.9648 20.0352C9.25397 16.3243 0 16.5 0 16.5C0 16.5 9.25397 16.6757 12.9648 12.9648C16.6757 9.25397 16.5 0 16.5 0Z" fill="#eabf04"></path>
          </svg>
        ))}
   
 


      </div>      
    </div>

 
     </>
  );
};

export default Page4;
