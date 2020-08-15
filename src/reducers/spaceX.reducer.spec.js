import spaceXReducer from './spaceX.reducer';

import spaceXReducerConstants from '../actions/spaceX.constants';

describe('SpaceX Reducer', () => {
  test('should return initial state by default, if state and action type is undefined', () => {
    expect(spaceXReducer(undefined, { type: undefined })).toEqual({ data: [], filters: {} });
  });

  test('should return with new data if set data action type is dispatched', () => {
    expect(spaceXReducer(
      { data: [{ abc: 'def' }], filters: {} },
      { type: spaceXReducerConstants.SPACEX_SET_DATA, payload: [{ def: 'ghi' }] },
    )).toEqual({ data: [{ def: 'ghi' }], filters: {} });
  });

  test('should return with filters set if apply filter action type is dispatched', () => {
    expect(spaceXReducer(
      { data: [{ abc: 'def' }], filters: {} },
      { type: spaceXReducerConstants.SPACEX_APPLY_FILTER, payload: { name: 'f1', value: 'f1Val' } },
    )).toEqual({ data: [{ abc: 'def' }], filters: { f1: 'f1Val' } });
  });
});
