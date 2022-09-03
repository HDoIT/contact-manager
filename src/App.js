
import './components/contacts/Contact';
import React, { Component } from 'react'
// import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import ContactApi from './components/contacts/ContactApi'; 
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import DetailContact from './components/page/DetailContact';
import { Provider } from './context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/page/About';
import Loader from './components/loader';
import NotFoundPage from './components/page/NotFoundPage';
import Album from './components/page/Album';
import DetailAlbum from './components/page/DetailAlbum';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {loading: false};
  }


  render() {
    const {loading} = this.state;
    return (
      loading ? (<Loader></Loader>):
      (<React.Fragment>
        <Provider>
            <Router>
              <Header branding="Contact Manager"/>
              <div className='container'>
                {/* <AddContact /> */}
                {/* <ContactApi /> */}
                <Switch>
                  <Route exact path="/contact-manager" component={ContactApi}/>
                  <Route path="/contact-manager/about" component={About}/>
                  <Route exact path="/contact-manager/detailalbum/:userId/:id" component={DetailAlbum}/>
                  <Route exact path="/contact-manager/addcontact" component = {AddContact} />
                  <Route exact path="/contact-manager/detailcontact/:id" component={DetailContact} />
                  <Route exact path="/contact-manager/editcontact/:id" component={EditContact} />
                  <Route exact path="/contact-manager/album" component={Album} />
                  <Route component={NotFoundPage} />
                </Switch>
              </div>
            </Router>
        </Provider>
      </React.Fragment>)

    )
  }
}
