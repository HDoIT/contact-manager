import React from 'react'
import { Consumer } from '../../context';

export default function DetailContact(props) {
  return (
    <Consumer>
        {
            value => {
                const {contacts,albums} = value;

                let newDetailContact = contacts.filter(el => el.id == props.match.params.userId);
                let newDetailAlbum = albums.filter(el=>el.id==props.match.params.id)

                console.log(typeof newDetailAlbum)

                let data = Object.values(newDetailAlbum).concat(Object.values(newDetailContact));

                console.log(data)
                let obj = [{...data[0],...data[1]}]
                console.log(obj);

                return(
                    obj.map(el=>
                        <div className='container'>
                            <h1><span style={{color:"green"}}>Author: </span>{el.name}</h1>
                            <h1 className='display-4'>{el.title}</h1>
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
