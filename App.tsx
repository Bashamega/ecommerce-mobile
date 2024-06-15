import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './app/screens/home';
import { Settings } from './app/screens/settings';
import { Details } from './app/screens/details';
import { Tracking } from './app/screens/tracking';
import { Cart } from './app/screens/cart';
import { Payment } from './app/screens/payment';
export default function App(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name='settings' component={Settings}/>
                <Stack.Screen name='details' component={Details}/>
                <Stack.Screen name='track' component={Tracking}/>
                <Stack.Screen name='cart' component={Cart}/>
                <Stack.Screen name='check' component={Payment}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}