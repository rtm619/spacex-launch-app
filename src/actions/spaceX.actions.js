import constants from './spaceX.constants';

export const setFilter = (filterName, filterValue) => ({
  type: constants.SPACEX_APPLY_FILTER,
  payload: {
    name: filterName,
    value: filterValue,
  },
});

export const setData = (data) => ({
  type: constants.SPACEX_SET_DATA,
  payload: data,
});
