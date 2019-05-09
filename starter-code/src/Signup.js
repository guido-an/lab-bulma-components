import React, { Component } from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import './Signup.css'

const Signup = props => {
  return (
    <section id="signup-section">
      <h1 className="is-size-5 has-text-black">Signup</h1>
      <FormField name="name" placeholder="name" />
      <FormField type="email" name="email" placeholder="email" />
      <FormField type="password" name="password" placeholder="password" />
      <CoolButton
        class="button is-rounded my-class is-hover is-medium"
        name="Submit"
      />
    </section>
  );
};

<style>
    

</style>
export default Signup;
