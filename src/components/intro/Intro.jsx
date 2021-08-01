import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

function Intro() {
    return (
        <div className="flex flex-row justify-center items-center w-screen h-full mt-80">
        <AnimatePresence key="1" className="absolute">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="absolute w-24 h-24 bg-red-400 rounded-full top-16 left-8">
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            className="absolute w-24 h-24 bg-green-400 rounded-full left-80">

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
            className="absolute w-24 h-24 bg-purple-400 rounded-full top-60">
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
            className="absolute w-24 h-24 bg-blue-400 rounded-full top-32 right-12">
          </motion.div>


        </AnimatePresence>
        <div className="flex flex-col justify-center items-center pl-8">
          <AnimatePresence key="2">
            <motion.h1
              initial={{ opacity: 0, y: -29 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
              className="font-light text-8xl select-none text-white z-20">Taking web/mobile app design to the *stars*
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: -29 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.2 }}
              className="font-light text-3xl text-white text-opacity-60 z-20">Already on the way!!!
            </motion.h1>

            <motion.button
              href="#"
              initial={{ opacity: 0, y: -29 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.8 }}
              className="px-2.5 py-1.5 bg-green-400 my-8 text-white font-semibold z-50 focus:border-none hover:rounded-3xl transition-all duration-400 ease-in-out">Contact me Via Upwork
            </motion.button>
          </AnimatePresence>
        </div>
      </div>
    )
}

export default Intro
