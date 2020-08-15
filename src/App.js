import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';
import spaceXApi from './services/spaceX.service';
import Card from './components/Card';
import constants from './constants';
import FilterComponent from './components/Filter';
import Metadata from './components/Metadata';

function App({ data }) {
  return (
    <>
      <Metadata
        pageTitle={constants.pageTitle}
        metaTitle={constants.metaTitle}
        metaDescription={constants.metaDescription}
        metaKeywords={constants.metaKeywords}
      />
      <div className="wrapper">
        <header><h1>{constants.header}</h1></header>
        <div className="content-wrapper">
          <div className="filter-container">
            <div className="filter">
              <FilterComponent />
            </div>
          </div>
          <div className="card-container">
            {data.map((item, index) => (
              <div className="item" key={item.flightNumber}>
                <Card
                  flightNumber={item.flightNumber}
                  missionName={item.missionName}
                  missionIds={item.missionIds}
                  launchYear={item.launchYear}
                  launchSuccess={item.launchSuccess}
                  landSuccess={item.landSuccess}
                  missionPatch={item.missionPatch}
                  articleLink={item.articleLink}
                  lazyLoad={index > 7}
                />
              </div>
            ))}
          </div>
        </div>
        <footer><h2>{`${constants.footer} ${process.env.REACT_APP_DEVELOPER}`}</h2></footer>
      </div>
    </>
  );
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

App.getSSRProps = async (query) => {
  const data = await spaceXApi(query);
  return data;
};

export default connect((state) => ({
  data: state.spaceXReducer.data,
}))(App);
