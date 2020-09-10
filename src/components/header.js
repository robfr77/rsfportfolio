import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteAuthor }) => (
  <header>
    <div className="container">
      <h1>
        <Link to="/" className="title">
          Rob Friedman
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteAuthor: PropTypes.string,
}

Header.defaultProps = {
  siteAuthor: ``,
}

export default Header
