import React from 'react';
import { mount, shallow } from 'enzyme';
import TodayButton from './TodayButton';
const mockedDate = new Date('2/21/2019, 3:22:31 PM');
global.Date = jest.fn(() => mockedDate);
global.Date.now = jest.fn(() => mockedDate);
test('TodayButton is working properly', () => {
  const component = shallow(React.createElement(TodayButton, null));
  expect(component.render()).toMatchSnapshot();
});
test('TodayButton Click is setting the date', () => {
  const setSelected = jest.fn();
  const component = mount(React.createElement(TodayButton, {
    setSelected: setSelected
  }));
  const date = new Date();
  component.find('.today-button-pf').simulate('click');
  expect(setSelected).toBeCalledWith(date);
});