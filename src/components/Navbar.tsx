import Link from 'next/link'
import FloatingNavbar from './FloatingNavbar'

export default function Navbar() {
  return (
    <FloatingNavbar className='text-primary'>
      <Link href={'#hero'} className='hover:underline'>
        Hero
      </Link>
      <Link href={'#about'} className='hover:underline'>
        About
      </Link>
      <Link href={'#project'} className='hover:underline'>
        Project
      </Link>
      <Link href={'#contact'} className='hover:underline'>
        Contact
      </Link>
    </FloatingNavbar>
  )
}
