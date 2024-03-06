import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Button } from './ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
const Navbar = () => {
  return (
    <nav className='w-full flex flex-row justify-between items-center bg-milkyWhite px-6'>
      <Logo />
      <div className='hidden lg:flex md:flex flex-row gap-6 font-bold items-center'>
        <Link href="#">Crypto Taxes</Link>
        <Link href="#">Free Tools</Link>
        <Link href="#">Rescource Center</Link>
        <Button size="lg">Get Started</Button>
      </div>
      <div className='lg:hidden md:hidden'>
        <HamburgerMenuIcon className='h-5 w-5' />
      </div>
    </nav>
  )
}

export default Navbar
