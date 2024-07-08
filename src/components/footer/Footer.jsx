import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className="main-container">
        <div>
          <ul>
            <li>
              <Link to={`/`}>
                all products
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                about seedra
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                our block
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                <img src="../assets" alt="logo" />
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                Terms&Conditions
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer