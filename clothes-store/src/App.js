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
    currentUser : null 
  }
}



unsubscribeFromAuth =null 

///////////////////////////////////////////////////////////////////////////////////////////



componentDidMount() {

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {

      const userRef = await creatuserprofileDocument(userAuth); //// make useRef as an new obj which have ( email,displayName) for use it in our app 



      userRef.onSnapshot(snapShot => {
        
        this.setState({

          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state); 
      });
    }

    
      else {

        this.setState({ currentUser: userAuth });
      }
       
    
  });
}


/////////////////////////////////////////////////////////////////////////////////////////////



componentWillUnmount() { 
  this.unsubscribeFromAuth(); 
}

////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
  
        <Header creentUser={this.state.currentUser} /> 
       
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

