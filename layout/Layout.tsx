import React, { FC, Fragment, ReactNode } from 'react'
import MainNavigation from './Main_navigation'

interface ILayout{
    children:ReactNode
}

const Layout:FC<ILayout> = ({children}) => {
  return (
    <Fragment>
    <MainNavigation/>
    <main>
        {children}
    </main>
    </Fragment>
  )
}

export default Layout