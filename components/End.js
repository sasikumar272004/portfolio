import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(ScrollTrigger);


const End = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to(".mvt",{
        x: '-300vw',
        duration:30,
        ease:"linear",
        yoyo:true,
        repeat:-1,
      })


      gsap.from(".lets h1",{
        y:250,
        stagger:.1,
        scrollTrigger:{
          trigger:".page6",
          start:"bottom 10%",
        }

      })

      gsap.from(".hap h1",{
        y:450,
        stagger:.1,
        scrollTrigger:{
          trigger:".page6",
          start:"bottom 10%",
        }

      })

    });
    return () => ctx.revert();  
  }, []);
  return (
    <>
    <div id='end' className='h-[100vh] relative   bg-[#d4d4ce]'
    style={{clipPath:"polygon(0% 0, 100% 0, 100% 100%, 0% 100%"}}>
      <div className='fixed h-[100vh] w-full bottom-0'> 
        <div className='mt-[5%]'>
          <h1 className='lets text-[100px] text-center font-ori text-[#959494] scale-y-[1.7] mb-[5%] flex justify-center'><h1>L</h1><h1>E</h1><h1>T'</h1><h1 className='pr-[4%]'>S</h1>  <h1>M</h1><h1>A</h1><h1>K</h1><h1>E ,</h1></h1>
          <h1 className=' hap text-[180px] text-center font-gal text-[#252424] z-0 scale-y-[1.8] flex justify-center'><h1>I</h1><h1 className='pr-[5%]'>T</h1><h1>H</h1><h1>A</h1><h1>P</h1><h1>P</h1><h1>E</h1><h1>N</h1><h1>..</h1></h1>
        </div>
        <div className='h-[50px] w-[200vw]  ed bg-[#ddd55f] z-50 translate-x-[-20%]  -rotate-[5deg] absolute bottom-[37%] '>
          <div className='h-[50px] w-[700vw] flex gap-3 text-[30px] mvt whitespace-nowrap font-buda font-bold pt-1 text-[#1d0606] '>
            <h1 className='w-[500px]'>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div>
            <h1>Your Search Ends Here</h1>
            <div>◉</div> <h1>Your Search Ends Here</h1>
            <div>◉</div>

            
          </div>
        </div> 


      <div className='flex justify-center gap-10 mt-[5%] '>

        <div className='flex items-center gap-1'><svg className='h-[40px] w-[40px]' fill="#414040" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 510 512.459">
          <path fill="#414040" d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z"/>
        </svg>
        <h1 className='text-[20px] text-[#9a9898]'>+91 9059925614</h1>
        </div>

        <div>
          <a href=''>
            <svg className='h-[40px] w-[40px]' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64">
              <rect width="512" height="509.64" rx="115.61" ry="115.61" fill="#414040"/>
              <path fill="#fff" d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"/>
            </svg>
          </a>
        </div>

        <div>
          <a href='#'>
            <svg className='h-[40px] w-[40px]' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512">
              <path fill="#414040" fill-rule="nonzero" d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"/>
            </svg>
          </a>
        </div>

        <div>
          <a href=''>
            <svg className='h-[40px] w-[40px]' xmlns="http://www.w3.org/2000/svg" width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
              <path fill="#414040" d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/>
            </svg>
          </a>
        </div>

        <div className='flex gap-1'>
          <a href='' className='flex gap-1'> 
          <svg className='h-[40px] w-[40px] -rotate-12' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 108.3">
            <path class="icon-path" d="M96.14,12.47l-76.71-1.1,28.3,27.85L96.14,12.47ZM53.27,49l9.88,39.17L102.1,22,53.27,49ZM117,1.6a5.59,5.59,0,0,1,4.9,8.75L66.06,105.21a5.6,5.6,0,0,1-10.44-1.15L41.74,49,1.67,9.57A5.59,5.59,0,0,1,5.65,0L117,1.6Z"/>
          </svg>
          <h1 className='text-[20px] text-[#9a9898]'>- sasikumar272004@gmail.com</h1>
          </a>
        </div>

      </div>


      </div>
    </div>
    
    <div className='h-[20vh] bg-black flex flex-col items-center justify-center text-[#eeecec] gap-3'>
      <h1 className='text-[#eeecec] font-serif font-light '>Copyright ©️ SasiKumar</h1>
      <h1 className='text-[30px] font-buda'> Let's start the journey , Together!</h1>
    </div>
    </>
  )
}

export default End