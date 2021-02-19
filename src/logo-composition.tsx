import React from 'react';
import {Sequence} from 'remotion';
import colors from './colors/colors.json';
import {hexToRgb} from './helper/hexToRgb';
import {useKeyframes} from './helper/use-keyframes';
import {CirceAnimation} from './logo-animation/circe-animation';
import {ExplosionLine} from './logo-animation/explosion-line';
import {LogoLowerDash} from './logo-animation/logo-lower-dash';
import {LogoUpperDash} from './logo-animation/logo-upper-dash';

export type RGBColors = {
	[key: string]: {
		[key: string]: number;
	};
};
export type HEXColors = typeof colors;

export const LogoComposition = () => {
	const {primary, secondary, red, dark} = Object.entries(colors).reduce(
		(acc, [key, value]) => {
			acc = {...acc, [`${key}`]: hexToRgb(value)};
			return acc;
		},
		{} as RGBColors
	);
	const [r, g, b] = useKeyframes(
		[
			[20, 21],
			[34, 35],
			[76, 77],
		],
		[
			[
				[primary.r, secondary.r],
				[primary.g, secondary.g],
				[primary.b, secondary.b],
			],
			[
				[secondary.r, red.r],
				[secondary.g, red.g],
				[secondary.b, red.b],
			],
			[
				[red.r, dark.r],
				[red.g, dark.g],
				[red.b, dark.b],
			],
		]
	);

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: `rgba(${r},${g},${b})`,
				display: 'flex',
			}}
		>
			<Sequence from={21} durationInFrames={6}>
				<ExplosionLine
					colors={colors}
					explosionWrapperStyle={{
						left: '49%',
						top: '48.6%',
						transform: 'rotate(38deg)',
					}}
					explosionLineStyle={{
						width: '10px',
						borderRadius: '5px',
					}}
				/>
				<ExplosionLine
					colors={colors}
					explosionWrapperStyle={{
						left: '49%',
						top: '48.6%',
						transform: 'rotate(218deg)',
					}}
					explosionLineStyle={{
						width: '10px',
						borderRadius: '5px',
					}}
				/>
			</Sequence>
			<Sequence from={22} durationInFrames={6}>
				<ExplosionLine
					colors={colors}
					explosionWrapperStyle={{
						left: '49%',
						top: '48.6%',
						transform: 'rotate(90deg)',
					}}
					explosionLineStyle={{
						width: '10px',
						borderRadius: '5px',
					}}
				/>
				<ExplosionLine
					colors={colors}
					explosionWrapperStyle={{
						left: '49%',
						top: '48.6%',
						transform: 'rotate(-90deg)',
					}}
					explosionLineStyle={{
						width: '10px',
						borderRadius: '5px',
					}}
				/>
			</Sequence>
			<Sequence from={0} durationInFrames={35}>
				<LogoLowerDash colors={colors} />
			</Sequence>
			<Sequence from={0} durationInFrames={35}>
				<LogoUpperDash colors={colors} />
			</Sequence>
			<Sequence from={35} durationInFrames={75}>
				<CirceAnimation colors={colors} />
			</Sequence>
		</div>
	);
};
