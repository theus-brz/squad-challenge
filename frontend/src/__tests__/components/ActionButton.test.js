import React from 'react';

import { shallow } from 'enzyme';

import ActionButton from '../../components/ActionButton/ActionButton';

const mockTitle = 'Button Title Mock';
const mockFunction = jest.fn();

describe('ActionButton tests', () => {
  const wrapper = shallow(
    <ActionButton title={mockTitle} onClick={mockFunction} />
  );

  it('should contain a title', () => {
    expect(wrapper.find('#action-button').text()).toEqual(mockTitle);
  });

  it('should call a function', () => {
    wrapper.simulate('click');

    expect(mockFunction).toHaveBeenCalled();
  });
});
