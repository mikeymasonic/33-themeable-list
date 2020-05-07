import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details';

describe('Details component', () => {
  it('renders Details', () => {
    const wrapper = shallow(<Details 
      name="Rick Sanchez" 
      species="Human"
      status="Alive"
      image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      origin="Earth (C-137)"
      location="Earth (Replacement Dimension)"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
