import {Easing} from 'remotion';
import {useKeyframes} from '../helper/use-keyframes';
import {HEXColors} from '../logo-composition';
import {LogoPath} from './logo-path';

type LogoUpperDashProps = {
	colors: HEXColors;
};

export const LogoUpperDash = ({colors}: LogoUpperDashProps) => {
	// Dash offset animation
	const [strokeDashoffset] = useKeyframes(
		[
			[0, 18],
			[18, 33],
			[33, 35],
		],
		[
			[-608, -390, {easing: Easing.bezier(0, 0.86, 1, 0.77)}],
			[-390, -140, {easing: Easing.bezier(0, 0.23, 0.64, 0.84)}],
			[-140, -300, {easing: Easing.bezier(0.36, 0.16, 0.88, 0.71)}],
		]
	);

	// Dash animation
	const [strokeDash] = useKeyframes(
		[
			[0, 20],
			[32, 36],
		],
		[
			[0, 40],
			[40, 60],
		]
	);

	return (
		<LogoPath
			colors={colors}
			strokeDash={strokeDash}
			strokeDashoffset={strokeDashoffset}
			wrapperStyle={{position: 'absolute', width: '100%', height: '100%'}}
		/>
	);
};
