import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Language App</h1>
      <nav>
        <Link to="/">Главная</Link>
      </nav>
    </header>
  );
}
