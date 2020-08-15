import React from 'react';
import PropTypes from 'prop-types';
import Lazyload from 'react-lazyload';

import './Card.css';
import convertToCDN from '../../utils/cdn';
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
  lazyLoad,
}) => {
  const image = <img alt={missionName} src={convertToCDN(missionPatch)} className="card-image" />;
  return (
    <div className="card-wrapper">
      {lazyLoad ? (
        <Lazyload offset={100} placeholder={<div className="card-image" />} height={200}>
          {image}
        </Lazyload>
      ) : image}
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
};

Card.propTypes = {
  flightNumber: PropTypes.number.isRequired,
  missionName: PropTypes.string.isRequired,
  missionIds: PropTypes.arrayOf(PropTypes.string),
  launchYear: PropTypes.string.isRequired,
  launchSuccess: PropTypes.bool.isRequired,
  landSuccess: PropTypes.bool.isRequired,
  missionPatch: PropTypes.string,
  articleLink: PropTypes.string,
  lazyLoad: PropTypes.bool,
};

Card.defaultProps = {
  missionIds: [],
  missionPatch: '',
  articleLink: '#',
  lazyLoad: false,
};

export default Card;
