import React from 'react';
import './Contact.css'

const Contact = () => {


    return(
        <div className="wrapper contact">
        <div className="contactInfo">
        <h1>Contact Me</h1>
        <p>
            <strong>Email: </strong> powdersteamboat@gmail.com
        </p>
        <p> 
            <strong>Phone: </strong> 303 552-8010
        </p>
        <p>
            <a href="https://docs.google.com/document/d/1U-qOk98lDYp8KPVqC81AsIvx82CtyC0G8QSQjH11F8A/edit?usp=sharing" target="_blank"><strong>View Resume</strong></a>
        </p>
        </div>
        </div>
        );
    }
    
    export default Contact;
    // <form>
    //     <div className="form-group">
    //         <input type="text" class="form-control" id="nameInput" placeholder="Name" />
    //         <br /><br />
    //         <input type="text" class="form-control" id="emailInput" placeholder="Email Address" />
    //         <br /><br />
    //         <select class="custom-select">
    //         <option selected>Which service are you interested in?</option>
    //         <option value="1">Website Building</option>
    //         <option value="2">Custom Email Templates</option>
    //         <option value="3">Full Stack Application Development</option>
    //         <option value="4">Blockchain or smart contract development</option>
    //         </select>
    //         <br /><br />
    //         <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Please briefly describe your project."></textarea>
    //         <br /> <br />
    //         <button type="submit" class="btn btn-secondary btn-lg btn-block">Send Request</button>
    //     </div>
    // </form>