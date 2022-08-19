import React from 'react'
import { Home } from './Home'
import { Profile } from './Profile'
import { Sidebar } from './Sidebar'

export const AllRoutes = () => {
  return (
    <div>
        <Home/>
        <Sidebar/>
        <Profile/>

    </div>
  )
}
