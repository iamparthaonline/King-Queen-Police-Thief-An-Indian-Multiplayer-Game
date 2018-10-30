import React from 'react';
import PropTypes from 'prop-types';
import style from './heading.scss';

const Heading = ({ title, subtitle }) => (
  <div className={style.heading}>
    <h2> {title} </h2>
    <span>{subtitle}</span>
  </div>
);

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Heading;
