import React from 'react'
import './Custoum-button.styles.scss'

export default function CustoumButton({children ,googleSignIn, ...otherprops}) {  // (also value inside props) I put other props inside butoon cuz I need submit props its work inside like a <input type='submit'
    return (
      

        <button   className={` ${googleSignIn ? 'google-sign-in' : ''  } custom-button`} {...otherprops} >  
       {children}
        </button>

      
    )
}

