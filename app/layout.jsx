import { Layout } from '@/components/dom/Layout'
import { Header } from '@/components/ui/Header'
import { FFFont, SIFont, HelveticaNowDisplayRegular } from '@/lib/fonts'
import '@/styles/global.css'

export default function RootLayout({ children }) {
  console.log('FFFont', FFFont)
  console.log('SIFont', SIFont)
  console.log('HelveticaNowDisplayRegular', HelveticaNowDisplayRegular)

  return (
    <html lang='en' className={`antialiased`}>
      <head />
      <body>
        <Header />
        <Layout>{children}</Layout>
        <div style={{ position: 'absolute', bottom: 80, right: 120 }}></div>
      </body>
    </html>
  )
}
