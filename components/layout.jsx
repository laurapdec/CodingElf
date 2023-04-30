import React from 'react'
import {Header,Footer} from '.';

function Layout({children , handleSearch}) {

  return (
    <>
        <Header handleSearch={handleSearch} />
        {children}
        <Footer/>
    </>
  )
}

export default Layout
