import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className='navbar'>
          <Link href="/"><div className='nav-item'>Home</div></Link>
          <Link href="/list"><div className='nav-item'>List</div></Link>
          <Link href="/new"><div className='nav-item'>New</div></Link>
        </div>
        {children}
      </body>
    </html>
  )
}
