import React from 'react';
import {shallow} from 'enzyme'

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
        const props = {navigation: {navigate: jest.fn()}}
        const wrapper = shallow(<Homepage {...props}/>)
        wrapper.find('TouchableOpacity').first().props().onPress()
        expect(props.navigation.navigate).toBeCalledWith('user', {userType: 'anonymous'})
    })

    it('should turn trial version when navigating to anonymous user', () => {
        const props = {navigation: {navigate: jest.fn()}}
        const wrapper = shallow(<Homepage{...props}/>)
        wrapper.find('TouchableOpacity').first().props().onPress()
        expect(wrapper.state().isTrial).toBe(true)
    })

    it('should navigate to professional users', () => {
        const props = {navigation: {navigate: jest.fn()}}
        const wrapper = shallow(<Homepage{...props}/>)
        wrapper.find('TouchableOpacity').at(1).props().onPress()
        expect(props.navigation.navigate).toBeCalledWith('user', {userType: 'professional'})
    })

    it('should navigate to premium users', () => {
        const props = {navigation: {navigate: jest.fn()}}
        const wrapper = shallow(<Homepage{...props}/>)
        wrapper.find('TouchableOpacity').at(2).props().onPress()
        expect(props.navigation.navigate).toBeCalledWith('user', {userType: 'premium'})    })
})