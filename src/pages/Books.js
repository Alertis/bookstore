import React, { Component } from 'react';
import { Card, Input, Button, Segment, Grid } from 'semantic-ui-react';
import {bookList,createBook} from '../actions/books';
import { connect } from 'react-redux';
import Book from '../component/Book'
import CreateBook from '../component/CreateBook';


class Books extends Component{
    state={
        books:[],
        search:"",
        open:false,
        newBook:{}
    }
    saveBook=()=>{
        this.state.books.push(this.state.newBook)
        this.createClick();
    }
    createClick=()=>{
        this.setState({open:!this.state.open})
    }
    
    componentDidMount(){
        this.props.bookList();
    }
    componentWillReceiveProps(nextState){
       nextState.books.length !== 0 && nextState.books.books.then((v)=>{
           this.setState({books:v.books})
       })
    }
    search= () => {
        this.props.bookList();
        setTimeout(() => {
            var updatedBooks=this.state.books;
            updatedBooks=updatedBooks.filter((e) => e.title.toUpperCase().includes(this.state.search.toUpperCase()))
            this.setState({books:updatedBooks})
        },1000) 
    }
    handleChange=(e)=>{
        this.setState({ [e.target.name]:e.target.value });
        this.search();
    }
    render(){
        
        return(
            <Segment>
                <Grid >
                    <Grid.Column width={14}>
                        <Input icon='search' placeholder='Search...' name="search" onChange={this.handleChange} style={{width:'100%'}} />
                    </Grid.Column>
                    <Grid.Column  width={2} >
                        <Button basic color="blue" onClick={this.createClick}>Create</Button>
                    </Grid.Column>
                </Grid>
                <Card.Group itemsPerRow={4}>
                    {this.state.books.length !== 0 && this.state.books.map(item => (
                        <Book book={item} />
                    ))}
                </Card.Group>
                <CreateBook open={this.state.open} newbook={this.state.newBook} save={this.saveBook} close={this.createClick} />
            </Segment>
         
                  
            )
    }
}

const mapStateToProps=({books})=>{
    return {books}
}

const mapDispatchToProps={
    bookList,createBook
}

export default connect(mapStateToProps,mapDispatchToProps)(Books);