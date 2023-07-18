import React from 'react'
import Navigation from './Navigation'
import HeadContent from './HeadContent'

const Header = () => {
  return (
    <div className=' w-screen h-[50vh] bg-blue-500'>
    <Navigation />
    <HeadContent />
    </div>
  )
}

export default Header