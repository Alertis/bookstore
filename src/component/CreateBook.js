import React, { Component } from 'react';
import { Modal,Message, Button, Form } from 'semantic-ui-react';

class CreateBook extends Component {
    state={
        isbn:"", title:"", subTitle:"", author:"", publisher:"", pages:"", description:"", webSite:"", img:"",
        errorMessage:""
    }
    save=()=>{
        if(this.state.isbn=="" || this.state.title=="" || this.state.subTitle=="" || this.state.publisher=="" || this.state.pages=="" || this.state.description=="" || this.state.webSite=="" || this.state.img=="")
            this.setState({errorMessage:"Fill in all the fields, Please",succcessMessage:""})
        else{
            const newBook={
                isbn:this.state.isbn,
                title:this.state.title,
                subtitle:this.state.subTitle,
                author:this.state.author,
                publisher:this.state.publisher,
                pages:this.state.pages,
                description:this.state.description,
                webSite:this.state.website,
                img:this.state.img,
            }
            this.state.books && this.state.books.push(newBook)
            this.setState({errorMessage:"",succcessMessage:"Succesfully registered"})
        }
    }
    handleChange=(e)=>{
        this.setState({ [e.target.name]:e.target.value });
    }
    render(){
        return(
            <Modal dimmer={true} open={this.props.open} onClose={this.props.close}>
                <Modal.Header>Add a Book</Modal.Header>
                <Modal.Content >
                    <Modal.Description>
                        {
                            this.state.errorMessage && 
                                <Message error>
                                    <Message.Header>Error !</Message.Header>
                                    <p>{this.state.errorMessage}</p>
                                </Message>
                        }
                        {
                            this.state.succcessMessage && 
                                <Message success>
                                    <Message.Header>Succes !</Message.Header>
                                    <p>{this.state.succcessMessage}</p>
                                </Message>
                        }
                        <Form>
                            <Form.Field>
                                <label>ISBN No</label>
                                <input placeholder='ISBN No' name="isbn" onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Title</label>
                                <input placeholder='Title' name="title" onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Sub Title</label>
                                <input placeholder='Sub Title' name="subTitle" onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Author</label>
                                <input placeholder='Author' name="author" onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Publisher</label>
                                <input placeholder='Publisher' name="publisher" onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Pages</label>
                                <input placeholder='Pages' name="pages" onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <input placeholder='Description' name="description" onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Web Site</label>
                                <input placeholder='Web Site' name="webSite" onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Image URL</label>
                                <input placeholder='Image URL' name="img" onChange={this.handleChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={this.props.close}>
                    Nope
                    </Button>
                    <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content="Save"
                    onClick={this.save}
                    />
                </Modal.Actions>
            </Modal>
        )
    }
}

export default CreateBook