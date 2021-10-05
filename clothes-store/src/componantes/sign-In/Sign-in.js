import React, { Component } from 'react'
import './Sign-in.styles.scss'
import CustoumButton from '../../componantes/Coustem-button/Custoum-button' 
import {auth, signInWithGoogle } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-Input' 

export class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email : '' , 
             password : '' 
        }
    }
///////////////////////////////////////////////////////

handelSubmit = async (e) => {
        e.preventDefault() 

        const {email,password} = this.state;

        try { 

          await  auth.signInWithEmailAndPassword(email,password)

          this.setState({ email : '',  password: '' }) 
            
        } catch (error) {
            
        console.log(error);
        }

    }

////////////////////////////////////////////////////////

handelChange = (e) =>{
   

    const {value,name} = e.target 
    this.setState({
        [name] : value 
    })
}



    
    render() {
        return (
            <div className='sign-in'> 
            

            <h2> I already have an account   </h2> 
            <span> sign up with your email and password </span> 
          

                <form onSubmit={this.handelSubmit} > 
               
                <FormInput type="email" 
                 name='email' 
                 required  value={this.state.email} 
                label='email'
                hChange={this.handelChange}  /> 
               

                <FormInput type="password" 
                 name='password'
                 required  value={this.state.password} 
                hChange={this.handelChange} 
                label='password'
                   /> 
                <div className='buttons'> 
                <CustoumButton type="submit">   Sign in  </CustoumButton>  

                <CustoumButton  onClick={signInWithGoogle} googleSignIn  >  Sign in with google  </CustoumButton>  
                </div>
                </form>
            </div>
        )  
    }
}

export default SignIn;  
