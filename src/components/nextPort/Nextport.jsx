import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';


function Nextport() {
    const {ref, inView} = useInView();
    
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x:0,
                transition: {
                    type: 'spring', duration: 1
                }
            })
        }
        console.log("use effect hoot, inView=", inView);

    }, [inView]);
    return (
        <div>
            <div ref={ref}>
                    <motion.h1
                        initial={{ opacity: 0, y: -29 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.8 }}
                    >
                        Hi, my name is Kaleb Abebe
                    </motion.h1>
            </div>
        </div>
    )
}

export default Nextport
