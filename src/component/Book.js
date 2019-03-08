import React, { Component } from 'react';
import { Container,Card, Icon, Image } from 'semantic-ui-react';

class Book extends Component {
    state={
        book: this.props.book ? this.props.book : {}
    }
    render(){
        return(
            <Card href={"/detail/"+this.state.book.isbn}>
                <Image src={this.state.book.img} />
                <Card.Content>
                <Card.Header>{this.state.book.title}</Card.Header>
                <Card.Meta>
                    <Icon name="pencil"/>{this.state.book.author} 
                </Card.Meta>
                <Card.Description>{this.state.book.subtitle}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <span>
                    <Icon name='book' />
                        {this.state.book.publisher}
                </span>
                </Card.Content>
            </Card>
        )
    }
}

export default Book