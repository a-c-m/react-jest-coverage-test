import React, { PropTypes } from 'react';
import numeral from 'numeral';

const Number = (props) => {
  const {
    component: Component,
    children,
    format,
    ...restProps,
  } = props;

  return (
    <Component {...restProps}>{numeral(children).format(format)}</Component>
  );
};

Number.propTypes = {
  component: PropTypes.node,
  children: PropTypes.string.isRequired,
  format: PropTypes.string,
};

Number.defaultProps = {
  component: 'span',
  format: '0,0.00',
};

export default Number;
