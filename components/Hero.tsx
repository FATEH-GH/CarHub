"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Stramline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore car"
          containerStyle="bg-amber-800 mt-20 text-white rounded full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <motion.div
          className="
        hero__image"
          initial={{ opacity: 0, scale: 1, x: "100%" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={"/BlackCar.png"}
            alt="hero"
            fill
            className="object-contain"
          />
        </motion.div>
        <div className="hero__image-overlay-orange" />
      </div>
    </div>
  );
};

export default Hero;
