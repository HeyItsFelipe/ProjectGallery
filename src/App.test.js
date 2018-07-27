import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Gallery from './Gallery';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('it contains a Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('it contains a Gallery component', () => {
    expect(wrapper.find(Gallery).length).toBe(1);
  });
});
