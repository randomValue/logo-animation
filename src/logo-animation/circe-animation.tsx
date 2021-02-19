import {CSSProperties, PropsWithChildren} from 'react';
import {Easing} from 'remotion';
import {useKeyframes} from '../helper/use-keyframes';
import {HEXColors} from '../logo-composition';
import {LogoComplete} from './logo-complete';
import {LogoText} from './logo-text';

type CircleAnimationProps = {
	circleStyle?: CSSProperties;
	colors: HEXColors;
};
type CircleProps = {
	circleStyle?: CSSProperties;
	svgStyle?: CSSProperties;
};

const RenderCircle = ({
	children,
	circleStyle,
	svgStyle,
}: PropsWithChildren<CircleProps>) => {
	return (
		<div
			style={{
				position: 'absolute',
				left: '0',
				top: '0',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<div
				style={{
					borderRadius: '50%',
					...circleStyle,
				}}
			>
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					width="283.5px"
					height="283.5px"
					viewBox="0 0 283.5 283.5"
					xmlSpace="preserve"
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						fill: 'transparent',
						strokeDasharray: '50 1000',
						strokeDashoffset: 301,
						...svgStyle,
					}}
				>
					<defs />
					<path
						d="M141.7,0C63.5,0,0,63.5,0,141.7s63.5,141.7,141.7,141.7S283.5,220,283.5,141.7c0,0,0,0,0,0
	C283.5,63.5,220,0,141.7,0L141.7,0z"
					/>
				</svg>

				{children}
			</div>
		</div>
	);
};

export const CirceAnimation = ({circleStyle, colors}: CircleAnimationProps) => {
	const circleEasing = [
		{easing: Easing.bezier(0, 0.63, 0, 1)},
		{easing: Easing.bezier(0.48, 0, 1, 0.63)},
	];
	const [circleScale, circleRotation, circleRotationSecondary] = useKeyframes(
		[
			[0, 30],
			[30, 42],
		],
		[
			[
				[10, 450, circleEasing[0]],
				[-135, 150, circleEasing[0]],
				[-200, 210, circleEasing[0]],
			],
			[
				[450, 294, circleEasing[1]],
				[150, -135, circleEasing[1]],
				[210, -200, circleEasing[1]],
			],
		]
	);

	const dashEasing = {
		easing: Easing.bezier(0.3, 0, 0.7, 1),
	};
	const [firstDashOffset] = useKeyframes([[6, 35]], [[-112, 0, dashEasing]]);
	const [secondDashOffset] = useKeyframes([[8, 37]], [[-112, 0, dashEasing]]);
	const [thirdDashOffset] = useKeyframes([[10, 39]], [[-112, 0, dashEasing]]);

	const [offsetCircle] = useKeyframes(
		[[29, 42]],
		[[0, -69, {easing: Easing.bezier(0.6, 0, 0.9, 1)}]]
	);

	const [offsetText] = useKeyframes(
		[[38, 42]],
		[[100, 200, {easing: Easing.bezier(0, 0.6, 0.4, 1)}]]
	);

	const [textOpacity] = useKeyframes([[41, 42]], [[0, 1]]);

	const [opacity] = useKeyframes([[35, 43]], [[1, 0]]);
	return (
		<div
			style={{position: 'absolute', left: '50%', top: '50%', ...circleStyle}}
		>
			<LogoText
				logoStyles={{
					opacity: textOpacity,
					fill: colors.light,
					top: `${offsetText}px`,
				}}
			/>
			<div style={{position: 'absolute', top: `${offsetCircle}px`}}>
				<LogoComplete
					colors={colors}
					circleStyles={{
						width: `${circleScale}px`,
						height: `${circleScale}px`,
					}}
					firstMaskStyles={{
						strokeWidth: 1,
						strokeDashoffset: firstDashOffset,
					}}
					secondMaskStyles={{
						strokeWidth: 2,
						strokeDashoffset: secondDashOffset,
					}}
					thirdMaskStyles={{
						strokeWidth: 3,
						strokeDashoffset: thirdDashOffset,
					}}
				/>
				<RenderCircle
					circleStyle={{
						width: `${circleScale * 1.1}px`,
						height: `${circleScale * 1.1}px`,
						...circleStyle,
						transform: `rotate(${circleRotation}deg)`,
						opacity,
					}}
					svgStyle={{
						stroke: colors.light,
						strokeWidth: '4',
						strokeLinecap: 'round',
					}}
				/>
				<RenderCircle
					circleStyle={{
						width: `${circleScale * 1.15}px`,
						height: `${circleScale * 1.15}px`,
						...circleStyle,
						transform: `rotate(${circleRotationSecondary}deg)`,
						opacity,
					}}
					svgStyle={{
						stroke: colors.light,
						strokeWidth: '4',
						strokeLinecap: 'round',
					}}
				/>
				<RenderCircle
					circleStyle={{
						width: `${circleScale * 0.9}px`,
						height: `${circleScale * 0.9}px`,
						...circleStyle,
						transform: `rotate(${-circleRotation + 150}deg)`,
						opacity,
					}}
					svgStyle={{
						stroke: colors.tertiary,
						strokeWidth: '6',
						strokeLinecap: 'round',
					}}
				/>
			</div>
		</div>
	);
};
