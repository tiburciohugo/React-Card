import React from "react";
import "./Main.css";

export default function Main(props) {
  return (
    <main className="main">
      <div>
        <h2 className="name">{props.name}</h2>
        <h4 className="dev">Frontend Developer</h4>
        <p id="website">
          <a href="#index.html" target="_blank">
            {props.website}
          </a>
        </p>
      </div>
      <div className="buttons">
        <button id="email">
          <i class="fas fa-envelope"></i>
          <a href="mailto:hugotiburcio@outlook.com" target="_blank" rel="noreferrer">
            <p>Email</p>
          </a>
        </button>
        <button id="linkedin">
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/hugotiburcio/" target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
        </button>
      </div>
      <div className="info">
        <h3>About</h3>
        <p>
          Id detraxit menandri percipitur pri, illud insolens volutpat at duo,
          et eos dicta habemus? Pri eripuit utroque imperdiet id. Mea et
          hendrerit elaboraret eloquentiam, ad agam quot inermis pro.
        </p>
        <h3>Interests</h3>
        <p>
          Id detraxit menandri percipitur pri, illud insolens volutpat at duo,
          et eos dicta habemus? Pri eripuit utroque imperdiet id. Mea et
          hendrerit elaboraret eloquentiam, ad agam quot inermis pro.
        </p>
      </div>
    </main>
  );
}
