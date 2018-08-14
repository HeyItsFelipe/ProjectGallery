import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header, { Unwrapped as UnwrappedHeader } from './Header';
import Gallery from './Gallery';
import { shallow } from 'enzyme';

describe('Header component', () => {
  const wrapper = shallow(<UnwrappedHeader />);
  it('should contain one element with header class', () => {
    expect(wrapper.find('.header').length).toBe(1);
  });

  it('should have two child elements', () => {
    expect(wrapper.children().length).toBe(2);
  });

  it('should contain one element with header__title class', () => {
    expect(wrapper.find('.header__title').length).toBe(1);
  });

  it('header__title element should have correct text', () => {
    expect(wrapper.find('.header__title').text()).toMatch('ProjectGallery');
  });

  it('should contain one text input element', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('text input element should have correct placeholder text', () => {
    expect(wrapper.find('input').prop('placeholder')).toMatch('Search by Title or Tech');
  });
});
