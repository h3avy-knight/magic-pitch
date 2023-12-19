import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { DiApple } from "react-icons/di";
import one from "../assets/one.webp";
import two from "../assets/two.webp";
import three from "../assets/three.webp";
import mobile from "../assets/mobile.webp";
import { motion } from "framer-motion";

const Navbar = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <header className="text-gray-600 body-font h-[100vh] backgroung-bg">
      <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Mercury</span>
        </a>
        <motion.nav
          animate={{ x: 100, scale: 1 }}
          transition={{ type: "tween", duration: 1 }}
          initial={{ scale: 0 }}
          className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        >
          <a className="mr-5 hover:text-gray-900">Product</a>
          <a className="mr-5 hover:text-gray-900">Compare</a>
          <a className="mr-5 hover:text-gray-900">Pricing</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </motion.nav>
        <motion.div
          animate={{ x: 1, scale: 1 }}
          transition={{ type: "tween", duration: 1 }}
          initial={{ scale: 0 }}
        >
          <button className="border border-zinc-800 rounded-full px-3 py-2 mr-6">
            Login
          </button>
          <button className="inline-flex items-center bg-gray-900 px-3 py-2 focus:outline-none rounded-full text-white mt-4 md:mt-0">
            Let's Talk
            <MdArrowOutward />
          </button>
        </motion.div>
        {/* <div className="absolute right-0 z-[-99] w-[600px] border rounded-lg">
          <img src={Linear_bg} className="" />
        </div> */}
      </div>
      {/* ------------------- */}

      <section className="mt-10">
        <div className="max-w-[90%] m-auto grid grid-cols-2 gap-3 justify-center">
          <motion.div
            animate={{ x: 100, scale: 1 }}
            transition={{ type: "tween", duration: 1 }}
            initial={{ scale: 0 }}
          >
            <div className="border border-zinc-800 rounded-full p-2 w-[30%] my-2">
              <h1>Financal Management</h1>
            </div>
            <p className="text-8xl text-black">
              A simpler, smarter basic credit
              <span className="gradient_text text-8xl"> card.</span>
            </p>
            <p className="my-5">
              Your powerful companion on the road to financial success! Explore
              <br />
              personal budget management, investment opportunities.
            </p>
            <div className="mt-3 flex flex-row items-start justify-between">
              <button className="inline-flex items-center bg-gray-900 px-3 py-2 focus:outline-none rounded-full text-white mt-4 md:mt-0">
                <DiApple className="mr-2" />
                App Store
              </button>
              <div className="flex flex-row items-center justify-between relative">
                <img
                  src={one}
                  className="h-[50px] border rounded-full border-zinc-300 z-10 right-1"
                  alt=""
                />
                <img
                  src={two}
                  className="h-[50px] border rounded-full border-zinc-300 absolute right-4 z-20"
                  alt=""
                />
                <img
                  src={three}
                  className="h-[50px] border rounded-full border-zinc-300 absolute right-10 z-30"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-black font-bold">24K+</div>
                <div className="text-zinc-500">Active User</div>
              </div>
            </div>
          </motion.div>
          <div className="">
            <motion.img
              animate={{ x: 100, scale: 1 }}
              transition={{ type: "tween", duration: 1 }}
              initial={{ scale: 0 }}
              className="h-full w-[60%]"
              src={mobile}
              alt=""
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
