import axios from 'axios';
import React, { Component } from 'react'
import{v4 as uuidv4} from 'uuid'
import { Consumer,ADD_CONTACT } from '../../context';
import TextInputGroup from '../layout/TextInputGroup'
import Loader from '../loader';
import Swal from "sweetalert2";


const REGEX_VALIDATE_EMAIL  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const REGEX_VALIDATE_PHONE = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
export default class AddContact extends Component {

    constructor(){
        super();
        this.state ={
            name:'',
            email:'',
            phone:'',
            errors: {
            },
            loading: false
        }   
    }

    componentDidMount(){
        this.setState({loading: true});
        setTimeout(()=>{
          this.setState({loading: false});
        },100)
      }

    onChange = (e) => {
        const {name,email,phone} = this.state;
        this.setState({[e.target.name] : e.target.value});
        if(name === ''){
            this.setState({errors:{name: 'Name is required'}});
            return;
        }
        if(email === ''){
            this.setState({errors:{email: 'Email is required'}});
            return;
        }
        if(!REGEX_VALIDATE_EMAIL.test(String(email).toLowerCase())){
            this.setState({errors:{email: 'Email not match'}})
            return;
        }
        if(phone === ''){
            this.setState({errors:{phone: 'Phone is required'}});
            return;
        }
        if(!REGEX_VALIDATE_PHONE.test(phone)){
            this.setState({errors:{phone: 'Phone not match'}})
            return;
        }
    }
    onSubmit = async (dispatch,e) =>{
        e.preventDefault();
        const {name,email,phone,loading} = this.state;

        if(name === ''){
            this.setState({errors:{name: 'Name is required'}});
            return;
        }
        if(email === ''){
            this.setState({errors:{email: 'Email is required'}});
            return;
        }
        if(!REGEX_VALIDATE_EMAIL.test(String(email).toLowerCase())){
            this.setState({errors:{email: 'Email not match'}})
            return;
        }
        if(phone === ''){
            this.setState({errors:{phone: 'Phone is required'}});
            return;
        }
        if(!REGEX_VALIDATE_PHONE.test(phone)){
            this.setState({errors:{phone: 'Phone not match'}})
            return;
        }
        
        const newContact = {
            // khi post lên server thì sẽ tự sinh ra id
            // id: uuidv4(),
            name,
            email,
            phone
        }

        Swal.fire("Thành công!", "Thêm người dùng thành công!", "success");

        try{
            const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
            dispatch({type: ADD_CONTACT, payload: res.data})
        // .then(res => dispatch({type: ADD_CONTACT,payload: res.data}))


        // dispatch({type: ADD_CONTACT,payload: newContact});

        //clear value input before add
        
        this.setState({
            name: '',
            email:'',
            phone:'',
            errors:{}
        })

        // điều hướng về trang chủ

        this.props.history.push('/');
        }
        catch(error){
            console.log("error: "+ error);
        }

    }
  render() {
    const {name,email,phone,errors,loading} = this.state;
    return(
        <Consumer>
            {
                value =>{
                    const {dispatch} = value;
                    return(
                        <div className="card mb-3">
                                    <div className="card-header">Add contact</div>
                                    <div className="card-body">
                                        <form action='' onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        {loading ? (<Loader></Loader>): (
                                            <div>
                                            <TextInputGroup 
                                                type="text"
                                                name='name'
                                                placeholder='eg: Le Huu Do'
                                                value={name}
                                                onChange={this.onChange}
                                                label="Name"
                                                error = {errors.name}
                                            />
                                            <TextInputGroup 
                                                type="text"
                                                name='email'
                                                placeholder='eg: example@example.com'
                                                value={email}
                                                onChange={this.onChange}
                                                label="Email"
                                                error = {errors.email}
                                            />
                                            <TextInputGroup 
                                                type="text"
                                                name='phone'
                                                placeholder='eg: 123-456-789 or 123.456.789'
                                                value={phone}
                                                onChange={this.onChange}
                                                label="Phone"
                                                error = {errors.phone}
                                            />
                                            </div>)}
                                            <input 
                                                type="submit"
                                                value="Add contact"
                                                className="btn btn-light btn-block"
                                            />
                                        </form>
                                    </div>
                                </div>)
                }
            }
        </Consumer>
    )
  }
}
