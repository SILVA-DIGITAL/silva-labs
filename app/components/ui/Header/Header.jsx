'use client'

import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { fadeInFromBottom, fadeInFromTop, bounceUpDown } from '@/lib/utils'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const Header = () => {
  const startYear = 1986
  const endYear = new Date().getFullYear()
  const [currentYear, setCurrentYear] = useState(startYear)
  const controls = useAnimation()

  useEffect(() => {
    const animationDuration = 5 * 1000 // 1 second
    const framesPerSecond = 60
    const totalFrames = (animationDuration / 1000) * framesPerSecond
    const step = Math.ceil((endYear - startYear + 1) / totalFrames)

    const updateYear = async () => {
      for (let i = startYear; i <= endYear; i += step) {
        await controls.start({ opacity: 0, transition: { duration: 0 } })
        setCurrentYear(i)
        await controls.start({ opacity: 1, transition: { duration: 0 } })
        await controls.start({ opacity: 1, transition: { duration: 0 } })
        await controls.start({ opacity: 0, transition: { duration: 0 } })
      }

      // Ensure the final year appears solid
      await controls.start({ opacity: 1, transition: { duration: 0 } })
    }

    updateYear()
  }, [controls, endYear, startYear])

  return (
    <header>
      <motion.div
        initial={{ height: '0%', y: '-100%' }}
        animate={{ height: '100%', y: '0%' }}
        transition={{ duration: 0.95, ease: 'easeInOut' }}
        className='absolute right-[60px] top-0 border-l border-black'
      />
      <div className='relative h-fit bg-primaryColor py-6 uppercase tracking-wider overflow-hidden'>
        {/* Left Border */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '50%' }}
          transition={{ duration: 0.95, ease: 'easeInOut' }}
          className='absolute left-0 top-0 h-full border-b border-black'
        />
        {/* Right Border */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '50%' }}
          transition={{ duration: 0.95, ease: 'easeInOut' }}
          className='absolute right-0 top-0 h-full border-b border-black'
        />
        <div className='mx-auto flex h-full items-center justify-between gap-2 px-8'>
          <div className='flex items-center text-xs font-bold uppercase'>
            <p className='flex-1 h-30 text-black text-3xl font-bold leading-7 tracking-wide ml-14'>
              <motion.span
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.5 }}
                className='hover:cursor-pointer z-[10] inline-block'
                variants={fadeInFromTop}
              >
                SILVA
              </motion.span>
              <motion.span
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.5 }}
                className='hover:cursor-pointer z-[10] inline-block ml-2'
                variants={fadeInFromBottom}
              >
                LABS
              </motion.span>
            </p>
          </div>
          {/* Navigation Links */}
          <div className='flex items-center text-xs font-bold uppercase mr-8'>
            <motion.div
              variants={fadeInFromTop}
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.5 }}
              className='hover:cursor-pointer z-[10]'
            >
              <Link href={`/UK`}>
                <motion.span
                  className='px-6 py-1 inline-block line-through'
                  whileHover={{ textDecoration: 'line-through', rotate: 180 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  UK
                </motion.span>
              </Link>
              /
              <Link href={`/IT`} className='z-[50]'>
                <motion.span
                  className='px-6 py-1 z-[50] inline-block'
                  whileHover={{ textDecoration: 'line-through', rotate: 180 }}
                  transition={{ duration: 0.02, ease: 'easeInOut' }}
                >
                  IT
                </motion.span>
              </Link>
              /
              <Link href={`/PT`}>
                <motion.span
                  className='px-6 py-1 inline-block'
                  whileHover={{ textDecoration: 'line-through', rotate: 180 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  PT
                </motion.span>
              </Link>
              /
              <Link href={`/JP`}>
                <motion.span
                  className='px-6 py-1 inline-block'
                  whileHover={{ textDecoration: 'line-through', rotate: 180 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  JP
                </motion.span>
              </Link>
              /
              <Link href={`/contact`}>
                <motion.span
                  className='px-6 py-1'
                  whileHover={{ textDecoration: 'line-through', rotate: 180 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  Contact
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full p-20 inline-flex flex-col items-start justify-start pointer-events-none'>
        <div className='w-full p-0 inline-flex flex-row items-center justify-center'>
          <div className='flex-1 shrink-1 flex display-flex gap-8'></div>
        </div>
        <div style={{ height: 60 }} />
        <div className='w-full p-0 inline-flex flex-row items-start justify-center'>
          <div className='max-w-[900px]'>
            <TextGenerateEffect
              delay={0.079}
              words='Artifex, Productio, Creativitas, Technologia, and Digitalis'
              className='flex-1 text-black text-[60px] font-bold mb-2 leading-snug'
            />
            <div className='leading-relaxed'>
              <TextGenerateEffect
                delay={0.079}
                words='The opportunity to deliver innovative technology that carries real
              value for humans and society'
                className='flex-1 text-black text-[40px] max-w-[700px]'
              />
            </div>
          </div>
          <div style={{ width: 10 }} />
          <motion.p
            className='flex-1 text-right text-black text-[200px] leading-none m-0 tracking-wide'
            initial={{ opacity: 0 }}
            animate={controls}
          >
            {`~Y${currentYear}`}
          </motion.p>
        </div>
        <div style={{ height: 10 }} />
        <div className='full w-full flex-1 shrink-1 p-0 inline-flex flex-row items-end justify-center'>
          <p className='flex-1 text-black text-8xl leading-none m-0 tracking-wide'></p>
          <div style={{ width: 10 }} />
          <p className='rotate-90 translate-x-[140px] translate-y-[-220px] translate-z-[10px] transform-origin-right text-right text-black text-xs font-bold leading-none whitespace-nowrap'>
            SCROLL DOWN FOR MORE{' '}
            <span className='mt-2 inline-block -rotate-90'>↓</span>
          </p>
        </div>
        <div style={{ height: 60 }} />
        <div className='pointer-events-all pointer-auto w-full p-0 inline-flex flex-row items-end justify-center'>
          <div className='whitespace-nowrap flex-1 shrink-1 w-0 text-black'>
            <p className='flex-1 text-black text-8xl leading-none m-0 tracking-wide'>
              X
            </p>
            <p className='text-sm leading-6 font-bold'>Lorem Ipsum</p>
            <p className='text-xs leading-6'>
              Sed do eiusmod tempor incididunt
            </p>
          </div>
          <div style={{ width: 10 }} />
          <motion.p
            variants={bounceUpDown}
            initial='hidden'
            animate='visible'
            className='full flex-1 shrink-1 w-0 text-center text-black text-sm font-bold leading-4 tracking-wide whitespace-nowrap'
          >
            THERE ARE MIRACULA BELOW
          </motion.p>
          <div style={{ width: 10 }} />
          <p className='full flex-1 shrink-1 w-0 text-right text-black text-sm leading-4'></p>
        </div>
      </div>
      <div className='full w-[40px] bg-black absolute top-0 left-0 h-full'>
        <p className='text-white text-sm absolute bottom-4 right-2 -rotate-90'></p>
      </div>
      <div className='full w-[40px] border-l-black absolute top-0 right-0 h-full'>
        <p className='text-white text-sm absolute bottom-4 right-2 -rotate-90'></p>
      </div>
    </header>
  )
}

export default Header
