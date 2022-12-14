import React, { Component } from 'react'
import axios from 'axios';
const Context = React.createContext();

export const DELETE_CONTACT = 'DELETE_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = "UPDATE_CONTACT";

const reducer = (state,action)=>{
    switch (action.type) {
        case DELETE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                ),
                loading: true
            }
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ?(contact = action.payload) : contact    
                )
            }
        default:
            return state;
    }
}

export class Provider extends Component {
  
    state={
        contacts: [],
        albums: [],
        dispatch: action => this.setState(state => reducer(state,action))
    };

    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({contacts: res.data})

        const res2 = await axios.get('https://jsonplaceholder.typicode.com/albums')
        this.setState({albums: res2.data})
        // .then(res => this.setState({contacts: res.data}));
    }
  
    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
  }
}


export const Consumer = Context.Consumer;