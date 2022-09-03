import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';  
import axios from 'axios';
import { Link } from "react-router-dom";
import { Consumer } from '../../context';
// import Pagination from '../../Pagination';
import Pagination from "react-js-pagination";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default class Album extends Component {

    state ={
        currentPage: 1,
        postsPerPage:9
    }

    // async componentDidMount(){
    //     const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
    //     this.setState({
    //         ...this.state,
    //         dataAlbum: res.data
    //     })
    // }
      // Get current posts

    render() {

    return (
        <Consumer>
            {
                value=>{
                    const {albums} = value;
                    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
                    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
                    const currentPosts = albums.slice(indexOfFirstPost, indexOfLastPost);
                
                    // Change page
                    const paginate = pageNumber => this.setState({currentPage: pageNumber});
                    return(
                        <>
                        <Box sx={{ flexGrow: 1, marginBottom:"3rem" }}>
                        <Grid container spacing={2} columns={12}>
                            {
                                currentPosts && currentPosts.length > 0 && currentPosts.map(el =>{
                                    return(
                                        <Grid item xs={4} key={el.id}>
                                            <Card sx={{ maxWidth: 345, height:"230px" }}>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {el.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">Share</Button>
                                                    <Button size="small">
                                                        <Link to={`/contact-manager/detailalbum/${el.userId}/${el.id}`}>Read more...</Link>
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                    {/* <Pagination
                        postsPerPage={this.state.postsPerPage}
                        totalPosts={albums.length}
                        paginate={paginate}
                    /> */}
                    <div className="pagination" style={{display:"flex",justifyContent:"center",marginBottom:"5rem"}}>
                    <Pagination
                        activePage={this.state.currentPage}
                        totalItemsCount={albums.length}
                        onChange={paginate}
                        pageRangeDisplayed={10}
                        nextPageText="Trang sau"
                        prevPageText="Trang trước"
                        firstPageText="Trang đầu"
                        lastPageText="Trang cuối"
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    </div>
                    </>
                    )
                }
            }
        </Consumer>
    )
  }
}




