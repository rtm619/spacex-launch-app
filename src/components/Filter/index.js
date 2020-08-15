import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilterButton from '../FilterButton';
import constants from '../../constants';
import filterConstants from '../../constants/filterValues';
import { setData, setFilter } from '../../actions/spaceX.actions';
import spaceXApi from '../../services/spaceX.service';
import convertToQS from '../../utils/querystring';
import './Filter.css';

// To test Component without Redux HOC.
export const Filter = ({ filters, dispatch }) => {
  const setReducerData = async (filterObject = {}) => {
    const data = await spaceXApi(filterObject);
    dispatch(setData(data));
    window.history.pushState('/', '/', `/?${convertToQS(filterObject)}`);
  };
  const applyFilter = async (event) => {
    const { name, value } = event.target;
    dispatch(setFilter(name, value));
    const filterObject = {
      ...filters,
      [name]: value,
    };
    await setReducerData(filterObject);
  };
  return (
    <>
      <h2 className="filter-heading">
        {constants.filters}
      </h2>
      {Object.keys(filterConstants).map((filterId) => (
        <div key={filterId} className="filter-items-wrapper">
          <h4 className="filter-title">{constants[filterId]}</h4>
          <hr />
          <ul className="filter-items">
            {filterConstants[filterId].map((filter) => (
              <li key={filter.value}>
                <FilterButton
                  onClick={applyFilter}
                  disabled={filter.value === filters[filterId]}
                  name={filterId}
                  value={filter.value}
                >
                  {filter.title}
                </FilterButton>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

Filter.propTypes = {
  filters: PropTypes.shape({
    launch_year: PropTypes.string,
    launch_success: PropTypes.string,
    land_success: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect((state) => ({
  filters: state.spaceXReducer.filters,
}))(Filter);
