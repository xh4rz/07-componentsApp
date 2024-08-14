import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../home/HomeScreen';
import { Animation101Screen } from '../animations/Animation101Screen';

const Stack = createStackNavigator();

export const Navigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="Animation101Screen" component={Animation101Screen} />
		</Stack.Navigator>
	);
};
