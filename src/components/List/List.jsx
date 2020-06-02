import React from 'react';
import PropTypes from 'prop-types';

const List = ({ id, name, species, status, image }) => (
  <section>
    <h3>{name}</h3>
    {species && <h4>Species: {species}</h4>}
    {status && <h4>Status: {status}</h4>}
    {image && <img src={image} />}
  </section>
);

List.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
};

export default List;
