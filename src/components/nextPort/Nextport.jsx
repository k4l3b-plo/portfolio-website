import { motion } from 'framer-motion'
import React from 'react'
// import { InView } from 'react-intersection-observer';

function Nextport() {
    return (
        <div className="z-20">
            <div className="flex flex-row justify-center z-20">
                <motion.h1
                    className="text-white text-opacity-70 text-center text-3xl mt-8 font-semibold"
                    initial={{ opacity: 0, y: -29 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.8 }}
                >
                    Hi, my name is Kaleb Abebe<br/> and i am Web/mobile app developer!!!
                </motion.h1>
            </div>
            <motion.div 
            initial={{ opacity: 0, y: -29 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.8 }}
            className="w-full self-center flex flex-col justify-end mt-4 items-center">
               
            </motion.div>
        </div>
    )
}

export default Nextport
