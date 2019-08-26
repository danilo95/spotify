import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import MainPage from '../pages/MainPage'
import {convertToMinutes} from '../utilities/UtilitiesFunctions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should function return correct time',()=>{
  const result=convertToMinutes('12000');
  expect(result).toBe('0:12')
})
