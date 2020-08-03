import React from 'react';

import { shallow } from 'enzyme';

import WebHeader from '../../components/WebHeader/WebHeader';

describe('WebHeader tests', () => {
  const wrapper = shallow(<WebHeader />);

  it(`should contain a title 1`, () => {
    expect(wrapper.find('#web-header-title').length).toEqual(1);
  });
});
