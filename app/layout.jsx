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
        <div style={{ position: 'absolute', bottom: 40, right: 40 }}>
          <p
            style={{
              flex: '1 1 0%',
              fontSize: 12,
              lineHeight: '1em',
              textAlign: 'right',
              color: 'black',
            }}
          >
            <a href='http://pmnd.rs/'>silva</a>{' '}
            <a href='https://github.com/pmndrs'>:</a>{' '}
            <a href='https://codesandbox.io/s/zxpv7'>labs</a>
          </p>
        </div>
      </body>
    </html>
  )
}
