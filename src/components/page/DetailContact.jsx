import React from 'react'
import { Consumer } from '../../context';

export default function DetailContact(props) {
  return (
    <Consumer>
        {
            value => {
                const {contacts} = value;

                let newDetailContact = contacts.filter(el => el.id == props.match.params.id);

                return(
                    newDetailContact.map(el=>
                        <div className='container'>
                            <h3>ID: {el.id}</h3>
                            <h3><span style={{color:"green"}}>Name: </span>{el.name}</h3>
                            <h3>Email: {el.email}</h3>
                            <h3>Phone: {el.phone}</h3>
                            <h1 className="display-4">About me</h1>
                            <p className='d-flex p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi commodi optio, expedita magnam dolore rerum, consequatur veniam repellendus sit, deserunt laudantium ratione ab eligendi ducimus libero non iure! Iste.</p>
                            <img src='https://picsum.photos/seed/picsum/200/300' alt='' style={{width:'50%', height: '400px'}}/>
                            <p className='d-flex p-2 flex-row-reverse'>
                            <span className='py-3 align-items-starts d-flex w-50'>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </span>
                            </p>
                            <img src='https://picsum.photos/200/300' alt='' style={{width:'50%', height: '400px'}}/>
                            <p className='d-flex p-2 flex-row-reverse'>
                            <span className='py-3 align-items-end d-flex w-50'>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </span>
                            </p>
                        </div>
                    )
                )
            }
        }
    </Consumer>
    
  )
}
