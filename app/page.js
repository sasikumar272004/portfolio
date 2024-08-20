 'use client'
 import Final from '@/components/Final';
import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
 import Page4 from '@/components/Page4';
import Project from '@/components/Project';
import End from '@/components/End';
import Nav from '@/components/Nav';

  

 

 const locomotiveScroll = new LocomotiveScroll();

  

const home = () => {

 

 
   return (
     <>
 
     <Final/>
     <Page4/>
     <Project/>
     <End/>
     
  
     </>
   )
 }
 
 export default home



 
 