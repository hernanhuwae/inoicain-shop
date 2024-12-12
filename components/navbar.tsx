import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNavbar from './mainnavbar'
import getCategories from '@/action/get-category'
import NavbarAction from './navbar-action'

const Navbar = async () => {

  const category= await getCategories()

  return (
    <div className='border-b'>
      <Container>
        <div className='relative flex items-center h-16 px-4 sm:px-6 lg:px-8 '>
          <Link href="/" className='flex ml-4 lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>Inoicain</p>
          </Link>
          <MainNavbar data={category}/>
          <NavbarAction/>
        </div>
      </Container>
    </div>
  )
}

export default Navbar