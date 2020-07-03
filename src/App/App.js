import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';



import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


import './App.scss';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import EditFunFact from '../components/pages/EditFunFact/EditFunFact';
import EditFamilyMember from '../components/pages/EditFamilyMember/EditFamilyMember';
import EditMemories from '../components/pages/EditMemories/EditMemories';
import FunFacts from '../components/pages/FunFacts/FunFacts';
import FamilyMembers from '../components/pages/FamilyMembers/FamilyMembers';
import Memories from '../components/pages/Memories/Memories';
import NewFunFact from '../components/pages/NewFunFact/NewFunFact';
import NewFamilyMember from '../components/pages/NewFamilyMember/NewFamilyMember';
import NewMemories from '../components/pages/NewMemories/NewMemories';
import SingleFunFact from '../components/pages/SingleFunFact/SingleFunFact';
import SingleFamilyMember from '../components/pages/SingleFamilyMember/SingleFamilyMember';
import SingleMemory from '../components/pages/SingleMemory/SingleMemory';


import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed}/>
            <div className="container">
              <div className="row">
              <Switch>
                <PrivateRoute path='/home' component={Home} authed={authed} />
                <PrivateRoute path='/facts/new' component={NewFunFact} authed={authed} />
                <PrivateRoute path='/facts/edit/:funFactsId' component={EditFunFact} authed={authed} />
                <PrivateRoute path='/facts/:funFactsId' component={SingleFunFact} authed={authed} />
                <PrivateRoute path='/facts' component={FunFacts} authed={authed} />
                <PrivateRoute path='/family/edit/:familyMembersId' component={EditFamilyMember} authed={authed} />
                <PrivateRoute path='/family/new' component={NewFamilyMember} authed={authed} />
                <PrivateRoute path='/family/:familyMembersId' component={SingleFamilyMember} authed={authed} />
                <PrivateRoute path='/family' component={FamilyMembers} authed={authed} />
                <PrivateRoute path='/memories' component={Memories} authed={authed} />
                <PrivateRoute path='/memories/new' component={NewMemories} authed={authed} />
                <PrivateRoute path='/memories/edit/:memoriesId' component={EditMemories} authed={authed} />
                <PrivateRoute path='/memories/:memoriesId' component={SingleMemory} authed={authed} />
                <PublicRoute path='/auth' component={Auth} authed={authed} />
                <Redirect from= "*" to="/home"/>
              </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;