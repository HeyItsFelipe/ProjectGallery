import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Gallery from './Gallery';
import { shallow } from 'enzyme';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('contains one Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains one Gallery component', () => {
    expect(wrapper.find(Gallery).length).toBe(1);
  });
});
