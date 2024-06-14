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
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name='Settings' component={Settings}/>
                <Stack.Screen name='Details' component={Details}/>
                <Stack.Screen name='Order Tracking' component={Tracking}/>
                <Stack.Screen name='Add to cart' component={Cart}/>
                <Stack.Screen name='Details' component={Payment}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}