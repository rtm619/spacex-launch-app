import React from 'react';
import { shallow } from 'enzyme';

import Card from '.';

describe('<Card /> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card
        flightNumber={101}
        missionName="Mission 101"
        launchYear="1970"
        launchSuccess={false}
        landSuccess={false}
        missionPatch="https://images2.imgbox.com/abc/deo.png"
      />,
    );
  });

  test('should render without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should have correct mission details', () => {
    expect(wrapper.find('a').props().children).toEqual('Mission 101 #101');
  });

  test('should have launch Year, Launch Success and Land Success details', () => {
    const assertions = ['1970', 'false', 'false'];
    wrapper.find('.card-item').forEach((node, index) => {
      expect(node.find('span').last().props().children).toEqual(assertions[index]);
    });
  });

  test('should render mission IDs if present', () => {
    wrapper.setProps({
      missionIds: ['M101', 'M102'],
    });
    expect(wrapper.find('.card-li')).toHaveLength(2);
  });

  test('should not lazyload image by default', () => {
    expect(wrapper.find('Lazyload')).toEqual({});
  });

  test('should lazyLoad image if lazyLoad is set to true', () => {
    wrapper.setProps({
      lazyLoad: true,
    });
    expect(wrapper.find('Lazyload')).toBeTruthy();
  });
});
