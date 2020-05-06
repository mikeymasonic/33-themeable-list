import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List
      id="1"
      name="Rick Sanchez"
      species="Human"
      status="Alive"
      image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"    
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
