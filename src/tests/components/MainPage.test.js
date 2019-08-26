import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow';
import MaingPage from '../../pages/MainPage';

test('should render mainpage correctly',()=>{
const rendeder= new ReactShallowRenderer();
renderer.render(<MainPage/>);
console.log(renderer.getRenderOutput())

})