import React from 'react';
import { Provider } from 'react-redux';

import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import App from '../App/App';
import Routes from '../routes';
import GlobalStyle from '../styles/global';

describe('App tests', () => {
  const wrapper = mount(<App />);

  it(`should contain a provider`, () => {
    expect(wrapper.find(Provider).length).toEqual(1);
  });

  it(`should contain the application routes`, () => {
    expect(wrapper.find(Routes).length).toEqual(1);
  });

  it(`should contain a theme provider`, () => {
    expect(wrapper.find(ThemeProvider).length).toEqual(1);
  });

  it(`should contain a global style`, () => {
    expect(wrapper.find(GlobalStyle).length).toEqual(1);
  });
});
