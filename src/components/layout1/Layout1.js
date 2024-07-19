import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout1 = ({children}) => {
  return (
    <>
      <Header/>
      <div className="content">
            {children}


        </div>
        <Footer/>
    </>
  )
}

export default Layout1
