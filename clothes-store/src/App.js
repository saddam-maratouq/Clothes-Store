import React from "react";
import Homepage from "./pages/home/Homepage";
import "./App.scss";
import { Route, Switch } from "react-router";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./componantes/header/Header"; 
import SiginInSignUp from './pages/sign-in and sign-up/sign-in and sign-up' 
import { auth,creatuserprofileDocument } from "./firebase/firebase.utils";


 class App extends React.Component { 

constructor(props) {
  super(props)

  this.state = {
     creentUser : null 
  }
}



unsubscribeFromAuth =null 

//////////////////////////

componentDidMount() {
  this.unsubscribeFromAuth =   auth.onAuthStateChanged( async user => {

    await  creatuserprofileDocument(user); 

     console.log(user); /// (user)  obj from google autu  
  }) 
   
}
///////////////////////////

componentWillUnmount() { 
  this.unsubscribeFromAuth(); 
}





  render() {
    return (
      <div>
  
        <Header creentUser={this.state.creentUser} /> 
       
        <Switch>
  
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SiginInSignUp} /> 
  
       
        </Switch>
      </div>
    );
}
 }

export default App ;

