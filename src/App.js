import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.comonent';
import Navs from './components/navigation/nav.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

 
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }  
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          });
        });   
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navs currentUser={this.state.currentUser} />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/shop' component={ShopPage} />
            <Route  path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }

}
  

export default App;
