import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ name, image, species, status, origin, location }) => (
  <>
    <h3>{name}</h3>
    {image && <img src={image} />}
    {species && <h4>Species: {species}</h4>}
    {status && <h4>Status: {status}</h4>}
    {origin && <h4>Origin: {origin}</h4>}
    {location && <h4>Location: {location}</h4>}
  </>
);

Details.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string
};

export default Details;
