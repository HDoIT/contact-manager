import React, { Component } from 'react';
import Contact from '../contacts/Contact';
import { Consumer } from '../../context';
import NotFoundPage from '../page/NotFoundPage';

class ContactApi extends Component {
    // deleteContact=(id,payload)=>{

    // }
    render() {
        return (
            <Consumer>
                {
                    value =>{
                        const {contacts} = value
                        return (
                            <React.Fragment>                               
                                {contacts.length>0 && contacts.map(con=><Contact
                                                        key = {con.id}
                                                        // deleteClickHandler={this.deleteContact.bind(this,con.id)}
                                                        con={con}   
                                                    />
                                )}
                                {
                                    contacts.length === 0 && <p>List Empty</p>
                                }
                            </React.Fragment>
                        )            
                    }
                }
            </Consumer>
        );
    }
}

export default ContactApi;
