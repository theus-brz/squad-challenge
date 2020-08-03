import React from 'react';

import { shallow } from 'enzyme';

import Main from '../App/Main';
import PageFooter from '../components/PageFooter/PageFooter';
import WebHeader from '../components/WebHeader/WebHeader';
import Routes from '../routes';

describe('Main tests', () => {
  const wrapper = shallow(<Main />);

  it(`should contain a WebHeader`, () => {
    expect(wrapper.find(WebHeader).length).toEqual(1);
  });

  it(`should contain the application routes`, () => {
    expect(wrapper.find(Routes).length).toEqual(1);
  });

  it(`should contain a webHeader`, () => {
    expect(wrapper.find(PageFooter).length).toEqual(1);
  });
});
