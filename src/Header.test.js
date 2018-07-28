import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Gallery from './Gallery';
import { shallow } from 'enzyme';

describe('Header component', () => {
  const wrapper = shallow(<Header />);
  it('contains one element with header class', () => {
    expect(wrapper.find('.header').length).toBe(1);
  });

  it('has two child elements', () => {
    expect(wrapper.children().length).toBe(2);
  });

  it('contains one element with header__title class', () => {
    expect(wrapper.find('.header__title').length).toBe(1);
  });

  it('header__title element has correct text', () => {
    expect(wrapper.find('.header__title').text()).toMatch('ProjectGallery');
  });

  it('contains one text input element', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('text input element has correct placeholder text', () => {
    expect(wrapper.find('input').prop('placeholder')).toMatch('Search by Title or Tech');
  });
});
