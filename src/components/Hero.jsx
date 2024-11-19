import React from 'react'
import heroVideo from '../assets/hero_vid.mp4';
import vid1 from '../assets/vid1.mp4'
import profileImg from '../assets/s_off.png';
import heroImg from '../assets/hero.jpg'
// import cer1 from '../assets/cerficateJs.png'

const Hero = () => {
  return (
    // <>
    // <div className='w-screen h-[98vh] relative overflow-x-hidden -z-3'>
    //   {/* <video src={heroVideo} autoPlay loop className='h-full w-full absolute object-cover overflow-x-hidden' ></video> */}
    //   {/* <video src={vid1} autoPlay loop className=' md:hidden h-full w-full absolute object-cover' ></video> */}
    // </div>
    // <div className='w-screen md:w-[98.5vw] h-screen absolute top-[50px] bg-black bg-opacity-70 '></div>

    // {/* information content  */}
    // <div className="content md:flex w-full h-screen absolute top-[50px]">

    //   <div className="text w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center align-cente">
    //   <p>Hi There!</p>
    //   <h1>Mohammed Salman</h1>
    //   <h2>Front End Web Developer</h2>
    //   </div>

    //   <div className="img w-full  md:h-[80vh] m-10">
    //     {/* <img src={profileImg} alt="profilePic" className='w-full h-full object-cover'/> */}
    //   </div>
    // </div>
    // </>
    <>
    <div className="background w-full h-screen">
      <img className='w-full h-full object-cover' src={heroImg} alt="hero Pic" />
    </div>
    <div className="info absolute top-28 md:top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:pr-4">
      <p className="uppercase ">hi there!</p>
      <h1 className='uppercase my-3 text-2xl md:text-4xl'>I'm <span className="text-[var(--theme)]">Mohammad Salman</span> </h1>
      <p>I'm a Freelance UI/UX Designer and Developer based in Delhi, INDIA. </p>
      <p>I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design</p>

      <button className='w-40 bg-[var(--theme)] p-2 rounded-sm hover:bg-white hover:text-black m-4 ml-0'>More About Me</button>
      <button className='bg-[var(--theme)] p-2 rounded-sm hover:bg-white hover:text-black w-32'>Portfolio</button>
    </div>
    </>
  )
}

export default Hero
