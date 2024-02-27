import localFont from 'next/font/local'

export const FFFont = localFont({
  src: [
    {
      path: '../../public/fonts/FF-regular.woff2',
      variable: '--font-FF-regular',
    },
    {
      path: '../../public/fonts/FF-medium.woff2',
      variable: '--font-FF-medium',
    },
    {
      path: '../../public/fonts/FF-Bold.woff2',
      variable: '--font-FF-bold',
    },
  ],
})

export const HelveticaNowDisplayRegular = localFont({
  src: '../../public/fonts/HelveticaNowDisplay-Regular.woff2',
  variable: '--font-helvetica-now-display-regular',
})

export const SIFont = localFont({
  src: '../../public/fonts/SolareItalic-Fine.woff2',
  variable: '--font-solare-italic-fine',
})
