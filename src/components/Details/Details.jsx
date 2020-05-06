import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ name, image, species, status, origin, location }) => (
  <>
    <h3>{name}</h3>
    {image && <img src={image} />}
    {species && <h4>Species: {species}</h4>}
    {status && <h4>Status: {status}</h4>}
    {origin && <p>Origin: {origin}</p>}
    {location && <p>location: {location}</p>}
  </>
);

Details.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  occupation: PropTypes.string,
  status: PropTypes.string,
  description: PropTypes.string,
  portrayedBy: PropTypes.string
};

export default Details;
