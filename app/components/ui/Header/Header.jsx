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
      <div className='relative h-fit bg-primaryColor py-6 uppercase tracking-wider overflow-hidden'>
        {/* Left Border */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '50%' }}
          transition={{ duration: 0.95, ease: 'easeInOut' }}
          className='absolute left-0 top-0 h-full border-b border-black cursor-pointer'
        />
        {/* Right Border */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '50%' }}
          transition={{ duration: 0.95, ease: 'easeInOut' }}
          className='absolute right-0 top-0 h-full border-b border-black cursor-pointer'
        />
        <div className='mx-auto flex h-full items-center justify-between gap-2 px-8'>
          <div className='flex items-center text-xs font-bold uppercase'>
            <p
              style={{
                flex: '1 1 0%',
                height: 30,
                fontSize: 30,
                fontWeight: '700',
                lineHeight: '30px',
                color: 'black',
                letterSpacing: 0.5,
              }}
              className='__className_74e6d0'
            >
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
          <div className='flex items-center text-xs font-bold uppercase'>
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
          <p className='flex-1 text-black text-8xl leading-none m-0 tracking-wide'>
            X
          </p>
          <div style={{ width: 10 }} />
          <p className='rotate-90 translate-x-[100px] translate-y-[-220px] translate-z-[20px] transform-origin-right text-right text-black text-xs font-bold leading-none whitespace-nowrap'>
            SCROLL DOWN FOR MORE{' '}
            <span className='mt-2 inline-block -rotate-90'>↓</span>
          </p>
        </div>
        <div style={{ height: 60 }} />
        <div className='pointer-events-all pointer-auto w-full p-0 inline-flex flex-row items-end justify-center'>
          <p className='full whitespace-nowrap flex-1 shrink-1 w-0 text-black text-xs leading-6'>
            <b>Wonders of Antiquity</b>
            <br />
            Pythagorean Mathematics
          </p>
          <div style={{ width: 10 }} />
          <motion.p
            variants={bounceUpDown}
            initial='hidden'
            animate='visible'
            className='full flex-1 shrink-1 w-0 text-center text-black text-xl font-bold leading-4 tracking-wide whitespace-nowrap'
          >
            THERE ARE MIRACLES BELOW
          </motion.p>
          <div style={{ width: 10 }} />
          <p className='full flex-1 shrink-1 w-0 text-right text-black text-sm leading-4'></p>
        </div>
      </div>
    </header>
  )
}

export default Header
