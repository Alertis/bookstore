import React, { Component } from 'react';
import { Table, Image, Button, Segment, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {bookDetail} from '../actions/books';



class Detail extends Component{
    state={
        book:[]
    }
   
    componentDidMount(){
        this.props.bookDetail(this.props.match.params.uid);
    }
    componentWillReceiveProps(nextState){
        console.log(nextState)
       nextState.books.length !== 0 && nextState.books.books.then((v)=>{
           this.setState({book:v})
       })
    }
   
    render(){
        console.log(this.state.book)
        return(
            <Segment>
                <Grid >
                    <Grid.Column width={6} >
                        <Image src={this.state.book.img}  style={{width:"100%"}}/>
                    </Grid.Column>
                    <Grid.Column  width={10} >
                        <Header as="h2">{this.state.book.title}</Header>
                        <p>{this.state.book.subtitle}</p>
                        <Table>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell><Header as="h4">Author</Header></Table.Cell>
                                    <Table.Cell> <p>{this.state.book.author}</p> </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Header as="h4">Publisher</Header></Table.Cell>
                                    <Table.Cell> <p>{this.state.book.publisher}</p> </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Header as="h4">Pages Count</Header></Table.Cell>
                                    <Table.Cell> <p>{this.state.book.pages}</p> </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Header as="h4">Description</Header></Table.Cell>
                                    <Table.Cell> <p>{this.state.book.description}</p> </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <Button basic color="blue" href={this.state.book.website} target="_blank"> More Info</Button>
                        
                    </Grid.Column>
                </Grid>
            </Segment>
         
                  
            )
    }
}

const mapStateToProps=({books})=>{
    return {books}
}

const mapDispatchToProps={
bookDetail
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);