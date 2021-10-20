import { Link } from "react-router-dom";

export const Home = ({ name }) => (
  <div>
    <h1>{name}</h1>
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
);
