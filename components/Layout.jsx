import React from 'react'
import {Header,Footer} from './';

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