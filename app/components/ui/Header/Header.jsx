'use client'

import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { fadeInFromBottom, fadeInFromTop, bounceUpDown } from '@/lib/utils'

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
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          padding: 40,
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '100%',
            padding: 0,
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: '1 1 0%', display: 'flex', gap: '2em' }}></div>
        </div>
        <div style={{ height: 60 }} />
        <div
          style={{
            width: '100%',
            padding: 0,
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <p className='flex-1 text-black text-70 text-[60px]'>
            <b>Artifex, Productio, Creativitas, Technologia, and Digitalis</b>
            <br />
            <span className='flex-1 text-black text-70 leading-[14px] text-[40px]'>
              The opportunity to deliver innovative technology that carries real
              value for humans and animals
              <br />
            </span>
            <b>—————————</b>
          </p>
          <div style={{ width: 10 }} />
          <motion.p
            style={{
              flex: '1 1 0%',
              fontSize: 150,
              lineHeight: '100%',
              textAlign: 'right',
              color: 'black',
              margin: 0,
              letterSpacing: -2,
            }}
            initial={{ opacity: 0 }}
            animate={controls}
          >
            {`Y${currentYear}`}
          </motion.p>
        </div>
        <div style={{ height: 10 }} />
        <div
          className='full'
          style={{
            fontFamily: "'Antonio', sans-serif",
            width: '100%',
            flex: '1 1 0%',
            padding: 0,
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              flex: '1 1 0%',
              fontSize: 250,
              lineHeight: '1em',
              color: 'black',
              margin: 0,
              letterSpacing: -10,
            }}
          >
            X
          </p>
          <div style={{ width: 10 }} />
          <p
            style={{
              transform:
                'rotate3d(0, 0, 1, 90deg) translate3d(-50px,20px,100px)',
              transformOrigin: 'right',
              fontSize: 12,
              fontWeight: '700',
              lineHeight: '100%',
              textAlign: 'right',
              color: 'black',
              whiteSpace: 'nowrap',
            }}
          >
            SCROLL DOWN{' '}
            <span
              style={{
                display: 'inline-block',
                transform: 'rotate(-90deg)',
              }}
              className='mt-2'
            >
              ↓
            </span>
          </p>
        </div>
        <div style={{ height: 60 }} />
        <div
          style={{
            pointerEvents: 'all',
            pointer: 'auto',
            width: '100%',
            padding: 0,
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <p
            className='full'
            style={{
              whiteSpace: 'nowrap',
              flex: '1 1 0%',
              fontSize: 12,
              lineHeight: '1.5em',
              color: 'black',
            }}
          >
            <b>Wonders of Antiquity</b>
            <br />
            Pythagorean Mathematics
          </p>
          <div style={{ width: 10 }} />
          <motion.p
            variants={bounceUpDown}
            initial='hidden'
            animate='visible'
            className='full'
            style={{
              fontFamily: "'Antonio', sans-serif",
              flex: '1 1 0%',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: '1em',
              textAlign: 'center',
              color: 'black',
              letterSpacing: -0.5,
              whiteSpace: 'nowrap',
            }}
          >
            THERE ARE MIRACLES BELOW
          </motion.p>
          <div style={{ width: 10 }} />
          <p
            className='full'
            style={{
              flex: '1 1 0%',
              fontSize: 12,
              lineHeight: '1em',
              textAlign: 'right',
              color: 'black',
            }}
          ></p>
        </div>
      </div>
    </header>
  )
}

export default Header
