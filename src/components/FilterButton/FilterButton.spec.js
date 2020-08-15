import React from 'react';
import { shallow } from 'enzyme';

import FilterButton from '.';

describe('<FilterButton/> Component', () => {
  let wrapper;
  const clickMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<FilterButton onClick={clickMock}>True</FilterButton>);
  });

  test('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should fire event listener on click', () => {
    wrapper.find('button').simulate('click');
    expect(clickMock).toHaveBeenCalledTimes(1);
  });

  test('should be disabled if disabled prop is set to true', () => {
    wrapper.setProps({
      disabled: true,
    });
    expect(wrapper.find('button').props().disabled).toBeTruthy();
  });
});
