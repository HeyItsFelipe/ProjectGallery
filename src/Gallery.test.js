import React from 'react';
import ReactDOM from 'react-dom';
import Gallery, { Unwrapped as UnwrappedGallery } from './Gallery';
import Card from './Card';
import { shallow } from 'enzyme';
import projectData from './projectData.json';

describe('Gallery component', () => {
  const wrapper = shallow(<UnwrappedGallery projectData={projectData} search="" />);
  it('should contain number of cards equal to number of projects', () => {
    expect(wrapper.find(Card).length).toBe(projectData['projects'].length);
  });
});
