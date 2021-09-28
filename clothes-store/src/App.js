import React from 'react'
import Homepage from './pages/home/Homepage' 
import './App.scss'
import { Route, Switch } from 'react-router'  

import ShopPage from './pages/shop/ShopPage'







export default function App() {
 
  return (
   <Switch>
   

   <Route exact path='/' component={Homepage} />
   <Route  exact path='/shop' component={ShopPage} /> 

   </Switch>
  )
}
