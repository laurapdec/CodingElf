import React from 'react'
import {Header,Footer} from '.';
import {ScrollUp} from '../lib'

function Layout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer/>
    </>
  )
}

export default Layout
