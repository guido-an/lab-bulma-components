import React, { Component } from "react";
import CoolButton from "./CoolButton";

const Navbar = props => {
  return (
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <CoolButton
                  name="button 1"
                  class="button is-rounded my-class is-danger is-small "
                />
                <CoolButton
                  name="button 2"
                  class="button is-small is-success"
                />
              </p>
              <p class="control" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
