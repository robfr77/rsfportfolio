import PropTypes from "prop-types"
import React from "react"

const Card = ({ children, title, link, time }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media has-text-centered">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            {link && (
              <a
                className="subtitle is-6"
                href={`${link}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link}
              </a>
            )}
          </div>
        </div>

        <div className="content">
          {children}
          <br />
          <time dateTime={`${time}`}>{time}</time>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.node,
  time: PropTypes.string.isRequired,
}

export default Card
