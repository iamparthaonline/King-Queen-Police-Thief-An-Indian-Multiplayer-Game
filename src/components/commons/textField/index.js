import React from 'react';
import PropTypes from 'prop-types';
import style from './textField.scss';

const textField = ({
  label,
  name,
  id,
  maxlength,
  placeholder,
  type,
  onChangeHandler,
}) => (
  <p className={style['input-container']}>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      maxLength={maxlength}
      onChange={onChangeHandler}
    />
  </p>
);

// HelloWorld.propTypes = {
//   title: PropTypes.string,
// };

export default textField;
