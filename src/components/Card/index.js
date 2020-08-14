import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import constants from '../../constants';

const Card = ({
  flightNumber,
  missionName,
  missionIds,
  launchYear,
  launchSuccess,
  landSuccess,
  missionPatch,
  articleLink,
}) => (
  <div className="card-wrapper">
    <img alt={missionName} src={missionPatch} className="card-image" />
    <div className="card-content">
      <a className="card-title" target="_blank" rel="noopener noreferrer" href={articleLink}>
        {`${missionName} #${flightNumber}`}
      </a>
      <div className="card-mission-wrapper">
        <div className="card-mission">{`${constants.mission_ids}:`}</div>
        <ul className="card-ul">
          {missionIds.map((mission) => (
            <li className="card-li" key={mission}>
              {mission}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-item">
        <span>{`${constants.launch_year}:`}</span>
        <span>{launchYear}</span>
      </div>
      <div className="card-item">
        <span>{`${constants.launch_success}:`}</span>
        <span>{String(launchSuccess)}</span>
      </div>
      <div className="card-item">
        <span>{`${constants.land_success}:`}</span>
        <span>{String(landSuccess)}</span>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  flightNumber: PropTypes.number.isRequired,
  missionName: PropTypes.string.isRequired,
  missionIds: PropTypes.arrayOf(PropTypes.string),
  launchYear: PropTypes.string.isRequired,
  launchSuccess: PropTypes.bool.isRequired,
  landSuccess: PropTypes.bool.isRequired,
  missionPatch: PropTypes.string,
  articleLink: PropTypes.string,
};

Card.defaultProps = {
  missionIds: [],
  missionPatch: '',
  articleLink: '#',
};

export default Card;
