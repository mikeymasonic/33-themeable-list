import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const List = ({ id, name, species, status, image }) => (
  <section>
    {/* <h4><Link to={`detail/${id}`} >{name}</Link></h4> */}
    <h4>{name}</h4>
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
