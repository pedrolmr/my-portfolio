import React from 'react';
import styled from 'styled-components';

const ContactSection = () => {
    return (
        <Contact>
            <ContactContainer>
                <form name="contact" method="POST">
                    <input type="hidden" name="form-name" value="contact" />
                    <InputWrapper>
                        <TwoInputs>
                            <Input type="name" name="name" placeholder="Name" />
                            <Input type="email" name="email" placeholder="Email" />
                        </TwoInputs>
                    </InputWrapper>


                    <Textarea type="message" name="message" placeholder="Message" />
                    <ButtonWrapper>
                        <Buttons>
                            <SubmitButton type="submit">Send</SubmitButton>
                            <ClearButton>Clear</ClearButton>
                        </Buttons>
                    </ButtonWrapper>
                </form>
            </ContactContainer>
        </Contact>
    )
}
const Contact = styled.div`
    display:flex;
    justify-content:center;
    width:50%;
    border:3px solid blue;

`
const ContactContainer = styled.div`
    width:50%;
    justify-content: space-between;
`
const InputWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:10px;

`
const TwoInputs = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`

const Input = styled.input`
    display:flex;
    width:49%
    font-size:15px;
    padding:10px;
    box-sizing : border-box;
    outline:none;

`
const Textarea = styled.textarea`
    width:100%
    height:200px;
    font-size:15px;
    padding:15px;
    box-sizing : border-box;
    outline:none;
`
const ButtonWrapper = styled.div`
    border:1px solid black;
    display:flex;
    justify-content:center;
`
const Buttons = styled.div`
    border:2px solid purple;
    display:flex;
    width:75%;
    justify-content:space-between;
    gi
`

const SubmitButton = styled.button`
    border: 1px solid #d1cfcf;
    border-radius:3px;
    text-align:center;
    padding:15px;
    width:49%;
    font-size:15px;
`
const ClearButton = styled.button`
    border: 1px solid #d1cfcf;
    border-radius:3px;
    text-align:center;
    padding:15px;
    width:49%;
    font-size:15px;
`
export default ContactSection;