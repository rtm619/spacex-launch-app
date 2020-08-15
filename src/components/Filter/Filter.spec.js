/* eslint-disable import/first */
import React from 'react';
import { shallow } from 'enzyme';

jest.mock('../../services/spaceX.service');

import { Filter } from '.';

describe('<Filter/> component', () => {
  let wrapper;
  const dispatchMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Filter filters={{}} dispatch={dispatchMock} />);
  });

  test('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should disable filter button if filter is already set', () => {
    wrapper.setProps({
      filters: {
        launch_year: '2018',
      },
    });
    const filterSection = wrapper.find('filter-items-wrapper').first();
    filterSection.find('li').forEach((node) => {
      if (node.props().key === '2018') {
        expect(node.find('FilterButton').props().disabled).toBeTruthy();
      }
    });
  });

  test('should call dispatch on setting filter', () => {
    wrapper.find('FilterButton').first().simulate('click', { target: { name: 'launch_year', value: '2006' } });
    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
});
