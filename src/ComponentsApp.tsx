import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/screens/navigator/Navigator';

export const ComponentsApp = () => {
	return (
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	);
};
