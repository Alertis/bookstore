import React, { Component } from 'react';
import { Container,Card, Input, Button, Segment, Grid } from 'semantic-ui-react';
import {bookList} from '../actions/books';
import { connect } from 'react-redux';
import Book from '../component/Book'

class Books extends Component{
    state={
        books:[]
    }
    componentDidMount(){
        this.props.bookList();
    }
    componentWillReceiveProps(nextState){
       nextState.books.length !== 0 && nextState.books.books.then((v)=>{
           this.setState({books:v})
       })
    }
    render(){
        console.log(this.state.books)
        return(
            <Segment>
                <Grid >
                    <Grid.Column width={14}>
                        <Input icon='search' placeholder='Search...' style={{width:'100%'}} />
                    </Grid.Column>
                    <Grid.Column  width={2} >
                        <Button basic color="blue">Create</Button>
                    </Grid.Column>
                </Grid>
                <Card.Group itemsPerRow={4}>
                    {this.state.books.length !== 0 && this.state.books.books.map(item => (
                        <Book book={item} />
                    ))}
                </Card.Group>
            </Segment>
         
                  
            )
    }
}

const mapStateToProps=({books})=>{
    return {books}
}

const mapDispatchToProps={
    bookList
}

export default connect(mapStateToProps,mapDispatchToProps)(Books);