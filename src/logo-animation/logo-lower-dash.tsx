import {Easing} from 'remotion';
import {useKeyframes} from '../helper/use-keyframes';
import {HEXColors} from '../logo-composition';
import {LogoPath} from './logo-path';

type LogoLowerDashProps = {
	colors: HEXColors;
};

export const LogoLowerDash = ({colors}: LogoLowerDashProps) => {
	// Dash offset animation

	const [strokeDashoffset] = useKeyframes(
		[
			[0, 20],
			[20, 27],
			[27, 33],
			[33, 35],
		],
		[
			[0, -250, {easing: Easing.bezier(0.45, 0, 0.85, 0.77)}],
			[-250, -390, {easing: Easing.bezier(0.15, 0.23, 0.64, 0.84)}],
			[-390, -410, {easing: Easing.bezier(0.36, 0.16, 0.64, 0.84)}],
			[-410, -250, {easing: Easing.bezier(0.36, 0.16, 0.88, 0.71)}],
		]
	);

	// Dash animation
	const [strokeDash] = useKeyframes(
		[
			[0, 20],
			[32, 35],
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
