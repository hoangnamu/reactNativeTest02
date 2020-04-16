import React from 'react';
import { shallow } from 'enzyme'

import Homepage from './../Homepage.component';

describe('Homepage Test', () => {
    it('should render snapshot test for homepage', () => {
        const snap = shallow(<Homepage/>)
        expect(snap).toMatchSnapshot()
    })

    it('should show state as message expect when mount component', () => {
        const expectMessage = 'Welcome to user board'
        const wrapper = shallow(<Homepage/>)
        expect(wrapper.state().title).toEqual(expectMessage)
    })

    it('should navigate to anonymous users', () => {
        expect(false).toBe(true)

    })

    it('should turn trial version when navigating to anonymous user', () => {
        expect(false).toBe(true)

    })

    it('should navigate to professional users', () => {
        expect(false).toBe(true)

    })

    it('should navigate to premium users', () => {
        expect(false).toBe(true)

    })
})