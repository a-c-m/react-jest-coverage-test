jest.unmock('../Number.jsx');

import React, { PropTypes, Component } from 'react';
import Number from '../Number.jsx';
import { shallow } from 'enzyme';

describe('UI Number atom', () => {
  it('should display the default formating', () => {
    const numberComponent = shallow(<Number>1000</Number>);
    expect(numberComponent.text()).toEqual('1,000.00');
  });

  it('should display the default number wrapped in a span', () => {
    const numberComponent = shallow(<Number>1000</Number>);
    expect(numberComponent.type()).toEqual('span');
  });

  it('should allow the formating as a prop', () => {
    const numberComponent = shallow(<Number children="1000" format="0,0.00" />);
    expect(numberComponent.text()).toEqual('1,000.00');
  });


  it('should allow a custom formating', () => {
    const numberComponent = shallow(<Number format="0,0.0000">1000</Number>);
    expect(numberComponent.text()).toEqual('1,000.0000');
  });

  it('should allow a custom tag', () => {
    const numberComponent = shallow(<Number component="div">1000</Number>);
    expect(numberComponent.type()).toEqual('div');
  });

  it('should allow a custom props (example: component as a link)', () => {
    const url = 'https://www.google.com/';
    const numberComponent = shallow(<Number component="a" href={url}>1000</Number>);
    expect(numberComponent.type()).toEqual('a');
    expect(numberComponent.text()).toEqual('1,000.00');
    expect(numberComponent.props().href).toEqual(url);
  });
});
