import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const levels = ["beginner", "intermediate", "advanced"];

  return (
    <main>
      <h2>Выберите уровень</h2>
      <ul>
        {levels.map((lvl) => (
          <li key={lvl}>
            <Link to={`/test/${lvl}`}>{lvl}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
