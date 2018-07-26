import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  //console.log(wrapper.find(Header));
  expect(wrapper.find(Header).length).toBe(1);
  //const div = document.createElement('div');
  //ReactDOM.render(<App />, div);
  //ReactDOM.unmountComponentAtNode(div);
});
