import React from 'react';

import { shallow } from 'enzyme';

import Card from '../../components/Card/Card';

const mockTitle = 'Card Title Mock';
const mockChildren = <p id="mock-children">children</p>;
const mockButtonTitle = 'Card Button Mock';
const mockFunction = jest.fn();

describe('Card tests', () => {
  const wrapper = shallow(<Card title={mockTitle}>{mockChildren}</Card>);

  it('should contain a title', () => {
    expect(wrapper.find('#card-title').length).toEqual(1);
    expect(wrapper.find('#card-title').text()).toEqual(mockTitle);
  });

  it('should render children', () => {
    expect(wrapper.find('#mock-children').length).toEqual(1);
  });

  it('should not render a button', () => {
    expect(wrapper.find('#card-button').length).toEqual(0);
  });

  const wrapperWithButton = shallow(
    <Card
      title={mockTitle}
      buttonTitle={mockButtonTitle}
      buttonClick={mockFunction}
    >
      {mockChildren}
    </Card>
  );

  it('should render a functional button', () => {
    expect(wrapperWithButton.find('#card-button').length).toEqual(1);

    wrapperWithButton.find('#card-button').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });
});
