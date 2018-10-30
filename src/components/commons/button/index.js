import React from 'react';
import PropTypes from 'prop-types';
import style from './button.scss';

const Button = ({ title, type, onClickHandler }) => (
  <a
    href="javascript:void(0)"
    className={` ${style.button} ${style[`${type}-button`]}`}
    onClick={onClickHandler}
  >
    {title}
  </a>
);

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default Button;
