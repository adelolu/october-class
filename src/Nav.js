import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        React
        <ul>
          <li>
            {" "}
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>

          <li>
            <Link to="/product/bag/1"> Bags </Link>
          </li>
          <li>
            <Link to="/product/shoe/2"> shoes </Link>
          </li>
          <li>
            <Link to="/product/glasses/3"> Glasses </Link>
          </li>

          <li>
            <Link to="/employee"> Employees </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
