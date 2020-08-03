import React from 'react';

import { shallow } from 'enzyme';

import PageFooter from '../../components/PageFooter/PageFooter';

describe('PageFooter tests', () => {
  const wrapper = shallow(<PageFooter />);

  it(`should contain a copyright text`, () => {
    expect(wrapper.find('#page-footer-copyright').length).toEqual(1);
  });
});
