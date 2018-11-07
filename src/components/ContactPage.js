import React from 'react';

const ContactPage = () => {
    return (
        <div className="home-page">
            <form method="POST" action="https://formspree.io/pedroluismontesinosrivera@gmail.com">
                <input type="email" name="email" placeholder="Your email"/>
                <textarea name="message" placeholder="Your message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
export default ContactPage;