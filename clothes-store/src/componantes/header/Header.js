import React from 'react'
import { Link } from 'react-router-dom' 
import { ReactComponent as Logo} from '../../assets/crown.svg' // from svg file 
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'


export default function Header({creentUser}) {
    return (
        <div className='header'>


        <Link className='logo-container'  to='/'  >  

        <Logo  className='logo' /> 

        </Link>  

        <div className='options' > 

        <Link className='option' to='/shop' > SHOP </Link>

        <Link  to='/shop' > CONTANT  </Link>   

        {
            creentUser ? 

           ( <div className='option' onClick={()=> auth.signOut()} > SIGN OUT   </div>)
            :
           ( <Link className='option' to='/signIn' > SIGN IN </Link> )
        }

        </div>

        </div>
    )
}
