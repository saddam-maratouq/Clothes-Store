import React from 'react'
import Homepage from './pages/home/Homepage' 
import './App.scss'
import { Route, Switch } from 'react-router'




const Hatspage = ( props) => {
  console.log({props});
  return(

    <div>
      <h1>
        Test hats page
      </h1>
    </div>
  )
}

export default function App() {
 
  return (
   <Switch>

   <Route exact path='/' component={Homepage} />
   <Route  path='/hats' component={Hatspage} />

   </Switch>
  )
}
