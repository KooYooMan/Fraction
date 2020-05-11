import React from 'react'
import { mount, render, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import LecturerHome from '../Lecturer/Home'
import StudentHome from '../Student/MainScreen/Home'
import StudentEnding from '../Student/MainScreen/Ending'
import { Provider } from 'react-redux';
import store from '../store';

configure({ adapter: new Adapter() });

describe('UI debug testing', () => {
    it ('lecturer home screen', () => {
        const component = render(
        <Provider store={store}>
            <LecturerHome />
        </Provider>)
        expect(component).toMatchSnapshot()
    });

    it ('student home screen', () => {
        const component = render(
        <Provider store={store}>
            <StudentHome />
        </Provider>)
        expect(component).toMatchSnapshot()
    });
    
    it ('student ending screen', () => {
        const component = render(
        <Provider store={store}>
            <StudentEnding />
        </Provider>)
        expect(component).toMatchSnapshot()
    });
})