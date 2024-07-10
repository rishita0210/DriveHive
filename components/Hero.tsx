// "use client"
// import React from 'react';
// import Image from 'next/image';
// import CustomButton from '@/components/CustomButton';
// import SliderComponent from '@/components/SliderComponent'
// const Hero = () => {
//     const handelScroll =() =>{

//     }
//   return (
//     <div className='hero'>
//       <div className='flex-1 pt-24 padding-x'>
//         <h1 className='hero__title pl-6'>
//         Smart Savings for Your Ride:
//         </h1>

//         <p className='hero__subtitle text-left pl-6'>
//         Find the Best Deals on your next car from Trusted Online Stores.
//         </p>

//         <CustomButton
//           title="" 
//           containerStyles="bg-primary-blue pl-6 text-white rounded-full mt-10"
         
//           handleClick={handelScroll}
//         />
//       </div>
//       <div className='hero__image-container'>
//         <div className="hero__image bg-#59C3DB pt-10 pr-4">
//         <Image src="/cry.png" alt="Hero Image" height={800} width={800}/>
        

           

//         </div>
//       </div>
      
//     </div>
    
   
//   );
// }

// export default Hero;

// "use client";
// import React, { useEffect, useRef } from 'react';
// import CustomButton from '@/components/CustomButton';

// const Hero = () => {
//   const videoRef = useRef(null);

//   const handelScroll = () => {
    
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = true; 
//       video.play().then(() => {
        
//       }).catch(error => {
        
//         console.log('Autoplay failed:', error);
//       });
//     }
//   }, []);

//   const handleUnmute = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = false; 
//       video.play();
//     }
//   };

//   return (
//     <div className='hero'>
//       <div className='flex-1 pt-24 padding-x'>
//         <h1 className='hero__title pl-6 text-white'>
//           Smart Savings for Your Ride:
//         </h1>

//         <p className='hero__subtitle text-left pl-6  text-white'>
//           Find the Best Deals on your next car from Trusted Online Stores.
//         </p>

//         <CustomButton
//           title="Learn More"
//           containerStyles="bg-buttonorange pl-6 text-white rounded-full mt-10"
//           handleClick={handelScroll}
//         />
//       </div>
//       <div className='hero__video-container'>
//         <div className="hero__video ">
//           <video
//             ref={videoRef}
//             src="/hero_video.mp4"
//             alt=" "
//             height={550}
//             width={550}
//             autoPlay
//             loop
//           />
//           <button onClick={handleUnmute} className="unmute-button">unmute</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import React, { useEffect, useRef } from 'react';
import CustomButton from '@/components/CustomButton';

const Hero = () => {
  const videoRef = useRef(null);

  const handelScroll = () => {
    // Add your scroll handling logic here
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Start muted to ensure autoplay
      video.play().then(() => {
        // Autoplay started successfully
      }).catch(error => {
        // Autoplay failed, can show a button to unmute
        console.log('Autoplay failed:', error);
      });
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false; // Unmute the video
      video.play(); // Ensure the video is playing
    }
  };

  return (
    <div className='hero'>
      <div className='flex-1 pt-24 padding-x'>
        <h1 className='hero__title pl-6 text-white'>
          Smart Savings for Your Ride:
        </h1>

        <p className='hero__subtitle text-left pl-6 text-white'>
          Find the Best Deals on your next car from Trusted Online Stores.
        </p>

        <CustomButton
          title="Learn More"
          containerStyles="bg-primary-blue pl-6 text-white rounded-full mt-10"
          handleClick={handelScroll}
        />
      </div>
      <div className='hero__video-container'>
        <div className="hero__video bg-#59C3DB ">
          <video
            ref={videoRef}
            src="/hero_video.mp4"
            alt=" "
            height={500}
            width={550}
            autoPlay
            loop
            className="video-fade-in"
          />
          <button onClick={handleUnmute} className="unmute-button">Unmute</button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .video-fade-in {
          animation: fadeIn 2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;


