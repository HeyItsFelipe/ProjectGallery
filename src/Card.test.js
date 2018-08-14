import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Gallery from './Gallery';
import Card from './Card';
import { shallow } from 'enzyme';
import projectData from './projectData.json';

describe('Card component', () => {
  const project = projectData['projects'][0];
  const wrapper = shallow(<Card key={project.id} cardData={project} />);

  it('should contain one link', () => {
    expect(wrapper.find('a').length).toBe(1);
  });

  it('should contain one image', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('should contain one project title', () => {
    expect(wrapper.find('.card__title').length).toBe(1);
  });

  it('should contain one description', () => {
    expect(wrapper.find('.card__description').length).toBe(1);
  });

  it('should contain technologies title', () => {
    expect(wrapper.find('.card__tech-title').length).toBe(1);
  });

  it('should contain technologies', () => {
    expect(wrapper.find('.card__techs').length).toBe(1);
  });
});
