import React, { Component } from "react";

import Navbar from "./Navbar.js";
import FormField from "./FormField.js";

const App = props => {
    return(
        <div>
            <Navbar />
            <FormField title="Name" label="Name" type="text" placeholder="e.g Alex Smith"  />
            <FormField title="Email" label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
    )
}


export default App;