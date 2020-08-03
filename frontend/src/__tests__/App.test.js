import React from 'react';
import { Provider } from 'react-redux';

import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import App from '../App/App';
import Main from '../App/Main';
import GlobalStyle from '../styles/global';

describe('App tests', () => {
  const wrapper = shallow(<App />);

  it(`should contain a provider`, () => {
    expect(wrapper.find(Provider).length).toEqual(1);
  });

  it(`should contain the main application`, () => {
    expect(wrapper.find(Main).length).toEqual(1);
  });

  it(`should contain a theme provider`, () => {
    expect(wrapper.find(ThemeProvider).length).toEqual(1);
  });

  it(`should contain a global style`, () => {
    expect(wrapper.find(GlobalStyle).length).toEqual(1);
  });
});
