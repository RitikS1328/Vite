import React from 'react'
import { motion } from 'framer-motion'

const Index = () => {
  return (
    <div className='bg-stone-300 h-screen w-screen'>
      <nav>
        <div className='flex pt-6'>
          <motion.h1
            initial={{ x: 0, y: -50, }}
            whileInView={{ x: 0, y: 0, }}
            transition={{ ease: 'easeInOut', duration: 0.7 }}
            className='justify-start mr-[40rem] text-4xl ml-5'>
            Rick Enterprises
          </motion.h1>
          <div className='flex gap-5 justify-end mr-[10rem]'>
            <motion.ul
              // initial={{ x: 0, y: -50, opacity: 10 }}
              // whileInView={{ x: 0, y: 0, opacity: 10}}
              // transition={{ ease: 'easeInOut', duration: 0.7 }}
              className='flex row gap-5 space-x-14 '>
              <motion.li
                initial={{ x: 0, y: -50, }}
                whileInView={{ x: 0, y: 0, }}
                transition={{ ease: 'easeInOut', duration: 0.7 }}
              >Technology</motion.li>
              <motion.li
                initial={{ x: 0, y: -50, }}
                whileInView={{ x: 0, y: 0, }}
                transition={{ ease: 'easeInOut', duration: 0.8 }}
              >About Us</motion.li>
              <motion.li
                initial={{ x: 0, y: -50, }}
                whileInView={{ x: 0, y: 0, }}
                transition={{ ease: 'easeInOut', duration: 0.9 }}
              >News</motion.li>
              <motion.li
                initial={{ x: 0, y: -50, }}
                whileInView={{ x: 0, y: 0, }}
                transition={{ ease: 'easeInOut', duration: 1 }}
              >Careers</motion.li>
              <motion.li
                initial={{ x: 0, y: -50, }}
                whileInView={{ x: 0, y: 0, }}
                transition={{ ease: 'easeInOut', duration: 1.1 }}
              >Contact</motion.li>
            </motion.ul>
          </div>
          <motion.div
            initial={{ x: 0, y: -50, }}
            whileInView={{ x: 0, y: 0, }}
            transition={{ ease: 'easeInOut', duration: 1.2 }}
            className='bg-slate-500 p-2 rounded'
          >Discuss Project</motion.div>
        </div>
      </nav>

      {/* <div  className='capitalize text-6xl md:text-9xl tracking-tighter overflow-hidden '>
        <motion.h1
          initial={{ rotate: 0, y: "40%", opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
          className='text-9xl  ml-10 origin-left inline-block'
        >Rethink — Recycling: Creating a</motion.h1>
        <motion.h1
           initial={{ rotate: 0, y: "40%", opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
          className='text-9xl ml-10 origin-left'
        >Sustainable Circular Economy</motion.h1>
        <motion.h1
         initial={{ rotate: 0, y: "40%", opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
          className='text-9xl  ml-10 origin-left '
        >for Plastics</motion.h1>
      </div> */}


      {["Rethink — Recycling: Creating a", "Sustainable Circular Economy", "for Plastics"].map((item, index) => {
        return <h1 key={index} className='capitalize text-6xl md:text-9xl tracking-tighter overflow-hidden '>
          <motion.span initial={{ rotate: 0, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.8
            }}
            className='inline-block origin-left'>
            {item}
          </motion.span>
        </h1>
      })}


      {/* 
      <div >
          <motion.h1
            drag
            initial={{ x: 0, y: 0, opacity: 10 }}
            whileInView={{ x: 200, y: 0, opacity: 10, rotate: -180 }}
            transition={{ ease: 'backInOut', duration: 2 }}
            className='text-red-200 text-9xl p-5'>Ritik Solanki <br />
          </motion.h1>
        </div> */}
    </div>
  )
}

export default Index