import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <div>
        <h2 className="name">Hugo Tiburcio</h2>
        <h4 className="dev">Frontend Developer</h4>
        <p id="website">
          <a href="#index.html" target="_blank">
            hugotiburcio.website
          </a>
        </p>
      </div>
      <div className="buttons">
        <button id="email">
          <i class="fas fa-envelope"></i><p>Email</p>
        </button>
        <button id="linkedin">
          <i class="fab fa-linkedin"></i><p>LinkedIn</p>
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
