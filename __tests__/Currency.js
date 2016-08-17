jest.unmock('../Number.jsx');
jest.unmock('../Currency.jsx');
jest.unmock('classNames');

import React, { PropTypes } from 'react';
import Currency from '../Currency.jsx';
import { shallow, mount } from 'enzyme';

describe('UI Currency atom', () => {
  it('should display the default formating', () => {
    const currencyComponent = mount(<Currency>1000</Currency>);
    expect(currencyComponent.text()).toEqual('$1,000');
  });

  it('should display the default number wrapped in a span', () => {
    const currencyComponent = mount(<Currency>1000</Currency>);
    expect(currencyComponent.find('.currency').type()).toEqual('span');
  });

  it('should allow the formating as a prop', () => {
    const currencyComponent = mount(<Currency children="1000" />);
    expect(currencyComponent.text()).toEqual('$1,000');
  });


  it('should allow a custom formating', () => {
    const currencyComponent = mount(<Currency className="different-currency" format="$0,0.0000">1000</Currency>);
    expect(currencyComponent.text()).toEqual('$1,000.0000');
  });

  it('should allow a custom tag', () => {
    const currencyComponent = mount(<Currency component="div">1000</Currency>);
    expect(currencyComponent.find('.currency').type()).toEqual('div');
  });

  it('should allow a custom props (example: component as a link)', () => {
    const url = 'https://www.google.com/';
    const currencyComponent = mount(<Currency component="a" href={url}>1000</Currency>);
    expect(currencyComponent.find('.currency').type()).toEqual('a');
    expect(currencyComponent.text()).toEqual('$1,000');
    expect(currencyComponent.props().href).toEqual(url);
  });

  it('should allow a custom class name', () => {
    const currencyComponent = shallow(<Currency className="different-currency">1000</Currency>);
    expect(currencyComponent.hasClass('currency')).toBe(true);
    expect(currencyComponent.hasClass('different-currency')).toBe(true);
  });

  it('should not pass the custom className to the child', () => {
    const currencyComponent = mount(<Currency className="different-currency">1000</Currency>);
    expect(currencyComponent.render().children(Number).hasClass('different-currency')).toBe(false);
  });

  it('should properly calculate the classNames', () => {
    const currencyComponent = mount(<Currency className="different-currency">1000</Currency>);
    expect(currencyComponent.props().format).toEqual('$0,0');
    expect(currencyComponent.render().children(Number).hasClass('different-currency')).toBe(false);
  });
});
