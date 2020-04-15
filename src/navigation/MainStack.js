import { createStackNavigator } from 'react-navigation';

import Homepage from '../homepage/Homepage.component';
import User from '../user/User.component';


const mainStack = createStackNavigator({
    'homepage': {
        screen: Homepage
    },
    'user': {
        screen: User
    },
    initialRoute: 'homepage'
})

export default mainStack;