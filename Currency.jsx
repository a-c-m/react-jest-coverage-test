import React, { PropTypes } from 'react';
import Number from './Number.jsx';
import classNames from 'classnames';

export const Currency = (props) => {
  const {
    children,
    className,
    ...restProps,
  } = props;

  return (
    <Number {...restProps} className={classNames('currency', className)}>{children}</Number>
  );
};

Currency.propTypes = {
  format: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Currency.defaultProps = {
  format: '$0,0',
};

export default Currency;
