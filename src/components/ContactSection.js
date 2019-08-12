import React, { Component } from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

class ContactSection extends Component{
    state = {
        input:{
            name: '',
            email: '',
            message: ''
        }
    }
    inputHandler = e => {
        this.setState({
            input: {
                ...this.state.input,
                [e.target.name]: e.target.value
            }
        });
    }
    
    clearFields = (e) => {
        e.preventDefault();
        this.setState({
            input: {
                name: '',
                email: '',
                message: ''
            }
        })
    }
    render(){
        return (
            // <Contact id="Contact">
            <Wrapper title="Contact" direction="column" width="100%">
                <ContactContainer>
                    <form name="contact" method="POST">
                        <input type="hidden" name="form-name" value="contact" />
                        <InputWrapper>
                            <TwoInputs>
                                <input 
                                    type="name" 
                                    name="name"
                                    value={this.state.input.name}
                                    onChange={this.inputHandler} 
                                    placeholder="Name" 
                                />

                                <input 
                                    type="email" 
                                    name="email" 
                                    value={this.state.input.email}
                                    onChange={this.inputHandler} 
                                    placeholder="Email" 
                                />
                            </TwoInputs>
                        </InputWrapper>


                        <Textarea 
                            type="message" 
                            name="message" 
                            value={this.state.input.message}
                            onChange={this.inputHandler} 
                            placeholder="Message" 
                        />
                        <ButtonWrapper>
                            <Buttons>
                                <button type="submit">Send</button>
                                <button onClick={this.clearFields}>Clear</button>
                            </Buttons>
                        </ButtonWrapper>
                    </form>
                </ContactContainer>

            </Wrapper>
        
        )
    }
}
const Contact = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        text-align:center;
    }
    @media (max-width: 500px){
        width:100%;
        padding:30px;
        box-sizing: border-box;
    }
`
const ContactContainer = styled.div`
    width:100%;
    justify-content: space-between;
    @media (max-width: 500px){
        width:100%;
    }

`
const InputWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:20px;
`
const TwoInputs = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;

    input{
        display:flex;
        width:49%;
        font-size:15px;
        padding:10px;
        box-sizing: border-box;
        outline:none;
        border-radius:5px;
        border:1px solid #dbdbdb;
    }
`
const Textarea = styled.textarea`
    width:100%;
    height:200px;
    font-size:15px;
    padding:15px;
    box-sizing: border-box;
    outline:none;
    margin-bottom:20px;
    border-radius:5px;
    border:1px solid #dbdbdb;
`
const ButtonWrapper = styled.div`
    display:flex;
    justify-content:center;
`
const Buttons = styled.div`
    display:flex;
    width:75%;
    justify-content:space-between;

    button{
        border: 1px solid #d1cfcf;
        border-radius:3px;
        text-align:center;
        padding:15px;
        width:49%;
        font-size:15px;
    }
`
export default ContactSection;