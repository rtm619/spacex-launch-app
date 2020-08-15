import React from 'react';
import { shallow } from 'enzyme';

import Metadata from '.';

describe('<Metadata/> component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Metadata
        pageTitle="React App"
        metaTitle="Meta Title React App"
      />,
    );
  });

  test('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should have pageTitle and metaTitle', () => {
    expect(wrapper.find('title').props().children).toEqual('React App');
    expect(wrapper.find('meta').first().props().content).toEqual('Meta Title React App');
  });

  test('should render meta description if passed', () => {
    wrapper.setProps({
      metaDescription: 'description',
    });
    expect(wrapper.find('meta').last().props().content).toEqual('description');
  });

  test('should render meta keywords if passed', () => {
    wrapper.setProps({
      metaKeywords: 'react, app',
    });
    expect(wrapper.find('meta').last().props().content).toEqual('react, app');
  });
});
