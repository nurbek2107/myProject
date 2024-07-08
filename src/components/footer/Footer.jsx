import { Link, NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className="main-container">
        <div>
          <ul>
            <li>
              <NavLink to={`/`}>
                all products
              </NavLink>
            </li>
            <li>
              <NavLink to={`/about`}>
                about seedra
              </NavLink>
            </li>
            <li>
              <NavLink to={`/blog`}>
                our block
              </NavLink>
            </li>
            <li>
              <NavLink to={`/`}>
                <img src="../assets/logo.svg" alt="logo" />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/terms`}>
                Terms&Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to={`/policy`}>
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer