import {
	ActivityIndicator,
	Animated,
	ImageStyle,
	StyleProp,
	View
} from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { useState } from 'react';

interface Props {
	uri: string;
	style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
	const { animatedOpacity, fadeIn } = useAnimation();

	const [isLoading, setIsLoading] = useState(true);

	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			{isLoading && (
				<ActivityIndicator
					style={{ position: 'absolute' }}
					color="grey"
					size={30}
				/>
			)}

			<Animated.Image
				source={{ uri }}
				onLoadEnd={() => {
					fadeIn({
						duration: 1000
					});
					setIsLoading(false);
				}}
				style={[style, { opacity: animatedOpacity }]}
			/>
		</View>
	);
};
