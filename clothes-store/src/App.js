import React from "react";
import Homepage from "./pages/home/Homepage";
import "./App.scss";
import { Route, Switch,Redirect } from "react-router"; // Redirct to change the root when user sign in // 
import ShopPage from "./pages/shop/ShopPage";
import Header from "./componantes/header/Header"; 
import SiginInSignUp from './pages/sign-in and sign-up/sign-in and sign-up' 
import { auth,creatuserprofileDocument } from "./firebase/firebase.utils";

import { connect } from 'react-redux'  

import { setCurentUser} from './redux/user/users.actions' 
 


 class App extends React.Component { 


unsubscribeFromAuth =null 



///////////////////////////////////////////////////////////////////////////////////////////



componentDidMount() {

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {

      const userRef = await creatuserprofileDocument(userAuth); //// make useRef as an new obj which have ( email,displayName) for use it in our app 



      userRef.onSnapshot(snapShot => {
        
        

          this.props.setCurentUser ({
            id: snapShot.id,
            ...snapShot.data() 
          })
      

        console.log(this.state); 
      });
    }

    
      else {

       this.props.setCurentUser(userAuth); 
      }
       
    
  });
}

///////////////////////////////////////////////////////////////////////////////////////////


componentWillUnmount() { 
  this.unsubscribeFromAuth(); 
}

////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
  
        <Header  /> 
       
        <Switch>
  
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" render={ () => this.props.CurentUser ? 
          
            (<Redirect to="/" />)  : (<SiginInSignUp/>) 
        
        } />  
  
        </Switch>
      </div>
    );
}
 } 

 const mapStateToProps = ({ user })  => ({ 

  CurentUser : user.currentUser 

 })



 const mapDispatchToProps = dispatch => ({   // dispatch effection in  action //

  setCurentUser : user =>  dispatch(setCurentUser(user)) 
 })

export default connect(mapStateToProps,mapDispatchToProps)(App) ;

 