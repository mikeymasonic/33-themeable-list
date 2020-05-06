import React from 'react';
import PropTypes from 'prop-types';

const List = ({ id, name, species, status, image }) => (
  <section>
    <p><Link to={`detail/${id}`} >{name}</Link></p>
    {species && <p>Species: {species}</p>}
    {status && <p>Status: {status}</p>}
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