import { useState } from 'react';
import { Title } from '../../components/ui/Title';
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/theme';
// import { CustomView } from './CustomView';

export const PullToRefreshScreen = () => {
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
					onRefresh={onRefresh}
				/>
			}
			style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
			{/* <CustomView margin> */}
			<Title text="Pull to refresh" safe />
			{/* </CustomView> */}
		</ScrollView>
	);
};
