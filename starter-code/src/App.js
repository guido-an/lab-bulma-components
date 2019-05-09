import React, { Component } from "react";

import Navbar from "./Navbar";
import FormField from "./FormField";
import Signup from "./Signup";
import Message from "./Message";


const App = props => {
    return(
        <div>
            <Navbar />
            <FormField title="Name" label="Name" type="text" placeholder="e.g Alex Smith"  />
            <FormField title="Email" label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <Signup />
            <Message className="isInfo" title="Hello World" desc="This is the desc" />
        </div>
    )
}


export default App;