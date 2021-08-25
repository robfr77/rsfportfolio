import React from 'react';
import PropTypes from 'prop-types';
import { stripTrailingSlash } from '../utils/helpers';

const Card = ({ children, project: { title, link, time } }) => {
  const trimmedLink = stripTrailingSlash(link);

  return (
    <article className="card">
      <div className="card-content">
        <div className="media has-text-centered">
          <div className="media-content">
            <p className="title is-5">{title}</p>
            {link && (
              <a
                className="subtitle is-6"
                href={`https://${link}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {trimmedLink}
              </a>
            )}
          </div>
        </div>

        <div className="content">
          {children}
          <div>
            <time dateTime={`${time}`}>{time}</time>
          </div>
        </div>
      </div>
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
};

Card.defaultProps = {
  project: {},
};

export default Card;
