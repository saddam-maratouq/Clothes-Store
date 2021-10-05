import React from 'react' 
import SignIn from '../../componantes/sign-In/Sign-in'
import SignUp from '../../componantes/sign-up/sign-up' 


import './sign-in and sign-up.styles.scss'

export default function SiginInSignUp() {
    return (
        <div className='sign-in-and-sign-up' >
           
            <SignIn/>  
            <SignUp/> 

        </div>
    )
}
