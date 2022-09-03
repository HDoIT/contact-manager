import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../contacts/Contact.scss';
import { Consumer,DELETE_CONTACT } from '../../context';
import Loader from '../loader';
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

class Contact extends Component { 
    state ={
        showInforItem: false,
        loading: false
    }
    
    // componentDidMount(){
    //     this.setState({loading:true})
    //     setTimeout(()=>{
    //         this.setState({loading:false})
    //     },1000)
    // }

    onShowClick(id,e){
        this.setState({ showInforItem: !this.state.showInforItem })
    }
    onDeleteClick= async (id,dispatch)=>{
        console.log('id',id)
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              dispatch({type: DELETE_CONTACT, payload: id})
            }
          })
        // dispatch({type: DELETE_CONTACT, payload: id});
    }

    // componentWillUnmount(){
    //     this.setState({loading:true})
    //     setTimeout(()=>{
    //         this.setState({loading:false})
    //     },1000)
    // }
    render() {
        const {id,name,email,phone} = this.props.con;
        const {showInforItem,loading} = this.state;
        return (
            loading?(<Loader></Loader>):
            (<Consumer>
                {
                    value =>{
                        const { dispatch } = value;
                        return (
                            <div className="card mb-2 h-100" >
                                <h4>
                                    {name}
                                    <i onClick={this.onShowClick.bind(this, id)} className="fas fa-sort-down"/>
                                    <i onClick={this.onDeleteClick.bind(this,id,dispatch)} className="pl-2 pb-2 fas fa-times custum-icon_plus"/>
                                    <Link to={`/contact-manager/editcontact/${id}`}><i className='fas fa-pen icon-plus' /></Link>
                                </h4>
                                {
                                    showInforItem &&
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{email}</li>
                                            <li className="list-group-item">{phone}</li>
                                            <li className="list-group-item"><Link to={`/contact-manager/detailcontact/${id}`}>Click me</Link></li>
                                        </ul>
                                }
                            </div>
                        )
                    }
                }
            </Consumer>)
        );
    }
}
Contact.propTypes={
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired
        con: PropTypes.object.isRequired
}
export default Contact;