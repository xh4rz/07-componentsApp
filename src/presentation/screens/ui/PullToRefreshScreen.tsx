import { useContext, useState } from 'react';
import { Title } from '../../components/ui/Title';
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';
// import { CustomView } from './CustomView';

export const PullToRefreshScreen = () => {
	const { colors } = useContext(ThemeContext);

	const [isRefreshing, setIsRefreshing] = useState(false);

	const { top } = useSafeAreaInsets();

	const onRefresh = () => {
		setIsRefreshing(true);

		setTimeout(() => {
			setIsRefreshing(false);
		}, 4500);
	};

	return (
		<ScrollView
			refreshControl={
				<RefreshControl
					refreshing={isRefreshing}
					progressViewOffset={top}
					colors={[colors.primary, 'red', 'orange', 'green']}
					progressBackgroundColor={colors.cardBackground}
					tintColor={colors.primary}
					onRefresh={onRefresh}
				/>
			}
			style={[
				globalStyles.mainContainer,
				globalStyles.globalMargin,
				{ backgroundColor: colors.background }
			]}>
			{/* <CustomView margin> */}
			<Title text="Pull to refresh" safe />
			{/* </CustomView> */}
		</ScrollView>
	);
};
