import {CSSProperties} from 'react';
import {Easing} from 'remotion';
import {useKeyframes} from '../helper/use-keyframes';

type ExplosionLineProps = {
	explosionWrapperStyle?: CSSProperties;
	explosionLineStyle?: CSSProperties;
};
export const ExplosionLine = ({
	explosionWrapperStyle,
	explosionLineStyle,
}: ExplosionLineProps) => {
	const [distance, stretch] = useKeyframes(
		[[0, 6]],
		[
			[
				[-100, -300, {easing: Easing.bezier(0, 0.38, 0.29, 1)}],
				[100, 0, {easing: Easing.bezier(0, 0.38, 0.29, 1)}],
			],
		]
	);

	const [explosionLineOpacity] = useKeyframes([[0, 6]], [[1, 0]]);
	return (
		<div
			style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				...explosionWrapperStyle,
			}}
		>
			<div
				style={{
					position: 'absolute',
					backgroundColor: '#ffffff',
					height: `${stretch}px`,
					top: `${distance}px`,
					opacity: explosionLineOpacity,
					...explosionLineStyle,
				}}
			/>
		</div>
	);
};
