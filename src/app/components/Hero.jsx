import React from "react";

const Hero = () => {
    return(
        <div className="w-full h-screen
         relative">
            <video 
            className="w-full h-full object-cover"
            src="assets/khanhlinh.mp4"
            autoPlay
            loop
            muted 
            /> 


        </div>
    )
}

export default Hero;