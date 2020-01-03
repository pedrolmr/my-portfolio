import React, { useState } from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import { screen } from './globals/MediaQueries'

const ContactSection = () => {
    const initialState = {
        name: "",
        email: "",
        message: ""
    }
    const [{ name, email, message }, setState ] = useState(initialState);
    const [error, setError] = useState("");

    const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const clearState = e => {
        e.preventDefault();
        setState({ ...initialState });
    };

    const prevent = e => {
        if(!name || !email || !message){
            setError("Fill out all the fields");
            e.preventDefault();
        }
    }

    return (
        <Contact id="Contact" title="Contact" direction="column" width="100%">
            <ContactContainer>
                <span>{error}</span>
                <form name="contact" method="POST" onSubmit={prevent}>
                    <input type="hidden" name="form-name" value="contact"/>
                    <InputWrapper>
                        <TwoInputs>
                            <input
                                type="name"
                                name="name"
                                value={name}
                                onChange={onChange}
                                placeholder="Name"
                            />

                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                placeholder="Email"
                            />
                        </TwoInputs>
                    </InputWrapper>


                    <Textarea
                        type="message"
                        name="message"
                        value={message}
                        onChange={onChange}
                        placeholder="Message"
                    />
                    <ButtonWrapper>
                        <Buttons>
                            <button type="submit">Send</button>
                            <button onClick={clearState}>Clear</button>
                        </Buttons>
                    </ButtonWrapper>
                </form>
            </ContactContainer>

        </Contact>
    )
}
const Contact = styled(Wrapper)`
    width:50%;
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
    ${screen.Tablet`
        width:100%;
        padding:30px;
        box-sizing: border-box;`
    }
`
const ContactContainer = styled.div`
    width:100%;
    /* justify-content: space-between; */
    ${screen.Tablet`
        width:100%;`
    }

`
const InputWrapper = styled.div`
    display:flex;
    justify-content:center;
`
const TwoInputs = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
          margin-bottom:10px;
        ${screen.Tablet`
            flex-direction:column;
            margin-bottom:10px;`
        }
    input{
        display:flex;
        width:49%;
        font-size:15px;
        padding:10px;
        box-sizing: border-box;
        outline:none;
        border-radius:5px;
        border:1px solid #dbdbdb;
        ${screen.Tablet`
            width:100%;
            `
        }
    }
    input:nth-child(1){
        ${screen.Tablet`
            margin-bottom:10px;`
        }
    }
`
const Textarea = styled.textarea`
    width:100%;
    height:200px;
    font-size:15px;
    padding:15px;
    box-sizing: border-box;
    outline:none;
    margin-bottom:5px;
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