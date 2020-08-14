import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import spaceXApi from './services/spaceX.service';

function App({ data }) {
  return (
    <div className="wrapper">
      {data.map((item) => (
        <div className="item" key={item.flight_number}>
          {item.mission_name}
        </div>
      ))}
    </div>
  );
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

App.getSSRProps = async (query) => {
  const data = await spaceXApi(query);
  return data;
};

export default App;
