import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './app/screens/Home';
import { Settings } from './app/screens/Settings';
import { Details } from './app/screens/Details';
import { Tracking } from './app/screens/Tracking';
import { Cart } from './app/screens/Cart';
import { Payment } from './app/screens/Payment';
import { Favourite } from './app/screens/Favourite';
export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name='settings' component={Settings} />
                <Stack.Screen name='details' component={Details} />
                <Stack.Screen name='track' component={Tracking} />
                <Stack.Screen name='cart' component={Cart} />
                <Stack.Screen name='check' component={Payment} />
                <Stack.Screen name='wish' component={Favourite} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}