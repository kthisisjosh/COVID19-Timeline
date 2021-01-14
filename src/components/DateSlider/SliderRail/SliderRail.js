import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const railOuterStyle = {
  position: 'absolute',
  width: '100%',
  height: 40,
  transform: 'translate(0%, -50%)',
  cursor: 'pointer',
};

const railInnerStyle = {
  position: 'absolute',
  width: '100%',
  height: 8,
  transform: 'translate(0%, -50%)',
  borderRadius: 4,
  pointerEvents: 'none',
  backgroundColor: 'rgb(155,155,155)',
};

function SliderRail({ getRailProps }) {
  return (
    <Fragment>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railInnerStyle} />
    </Fragment>
  );
}

SliderRail.propTypes = {
  getRailProps: PropTypes.func.isRequired,
};

export default SliderRail;
