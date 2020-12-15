import React from "react";

export default function Contact(props) {
  return (
    <div className="contact"> 
    <div>    
      <legend>Contact us</legend>
      <form action="https://formspree.io/mqkydpov" method="post">
      <div>
        <input type="text" name="name" id="name" placeholder="First and Last Name" required/>
      </div>
      <div>
        <input type="email" name="email" id="email" placeholder="Email" required/>
      </div>
      <div className="message">
        <label for="message" class="label">Your Message:</label> <br />
        <textarea name="message" id="message" rows="7" cols="50" placeholder="Enter your message here."></textarea>
      </div>
      <div>
        <button type="submit" className="submit">Submit</button>
      </div>
       </form>
    </div>
    </div>
  );
}
