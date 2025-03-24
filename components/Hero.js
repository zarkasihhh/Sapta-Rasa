import React, { useMemo } from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useUser } from "@clerk/nextjs"; // Clerk user

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { isLoaded, user } = useUser(); // Clerk user

  return (
    <div className="relative w-full mt-24 px-8 xl:px-32 mx-auto flex items-center justify-start" id="about">
      {/* Background Image with Rounded Corners and Padding */}
      <div
        className="absolute inset-4 bg-cover bg-center rounded-3xl overflow-hidden"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 rounded-3xl"></div>
      </div>
      
      {/* Main Content */}
      <ScrollAnimationWrapper>
        <motion.div
          className="relative z-10 text-left max-w-3xl text-white py-16 px-8 sm:px-16 md:px-24 lg:px-32 bg-black bg-opacity-50 rounded-lg"
          variants={scrollAnimation}
        >
          <h1 className="text-3xl lg:text-5xl font-semibold leading-tight">
            Bergabunglah dalam <strong>Event Memasak</strong> yang Seru!
          </h1>
          <p className="mt-4 mb-6 text-lg">
            Temui para chef berbakat, ikuti kompetisi memasak, dan temukan resep
            menarik yang akan membuat pengalaman kuliner Anda tak terlupakan.
          </p>
          
          {/* Conditional Button Rendering */}
          <ButtonPrimary>
            {isLoaded && user ? "Ikuti Event" : "Daftar Sekarang"}
          </ButtonPrimary>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Blurry Background Effect */}
      <div className="absolute bottom-0 w-full flex justify-start px-8 xl:px-32">
        <div className="bg-black opacity-10 w-full max-w-4xl h-40 rounded-lg" style={{ filter: "blur(80px)" }}></div>
      </div>
    </div>
  );
};

export default Hero;