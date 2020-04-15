import React from 'react';
import { shallow } from 'enzyme'

import User from './../User.component';

describe('Homepage Test', () => {
    it('should render snapshot test for user', () => {
        let props = {navigation: {state: {params: {userType: 'professional'}}}}
        const snap = shallow(<User {...props}/>)
        expect(snap).toMatchSnapshot()
    })

    it('should simulate & render avatar if avatar is exist ', () => {
        let props = {navigation: {state: {params: {userType: 'professional'}}}}
        const snap = shallow(<User {...props}/>)
        expect(snap.find('Image').exists()).toBe(true)
        // expect(snap.find('Image')).to.have.lengthOf(1)
    })

    it('should render empty when avatar is empty ', () => {
        let props = {navigation:{state:{params:{userType:'anonymous'}}}}
        const snap = shallow(<User{...props}/>)
        expect(snap.find('Image').exists()).toBe(false)
    })

})