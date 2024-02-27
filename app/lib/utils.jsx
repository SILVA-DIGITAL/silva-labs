import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const fadeInFromTop = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInFromBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const bounceUpDown = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: [-5, 5 - 5], // Bouncing animation
    opacity: [0, 1, 0], // Fading in and out
    transition: {
      y: {
        repeat: Infinity,
        duration: 6.9, // Total duration for one bounce cycle
      },
      opacity: {
        repeat: Infinity,
        duration: 6.9, // Total duration for one fade cycle
      },
    },
  },
}
