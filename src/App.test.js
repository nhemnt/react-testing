import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });


test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']")
  console.log(appComponent);
});


test('renders increment button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('clicking button increments counter display', () => {

});

