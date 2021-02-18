import React from 'react';
import {Sequence} from 'remotion';
import {useKeyframes} from './helper/use-keyframes';
import {CirceAnimation} from './logo-animation/circe-animation';
import {ExplosionLine} from './logo-animation/explosion-line';
import {LogoLowerDash} from './logo-animation/logo-lower-dash';
import {LogoUpperDash} from './logo-animation/logo-upper-dash';

export const LogoComposition = () => {
	const [r, g, b] = useKeyframes(
		[
			[20, 21],
			[34, 35],
			[76, 77],
		],
		[
			[
				[34, 68],
				[84, 28],
				[102, 127],
			],
			[
				[68, 99],
				[28, 31],
				[127, 51],
			],
			[
				[99, 35],
				[31, 35],
				[51, 35],
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
				<LogoLowerDash />
			</Sequence>
			<Sequence from={0} durationInFrames={35}>
				<LogoUpperDash />
			</Sequence>
			<Sequence from={35} durationInFrames={75}>
				<CirceAnimation />
			</Sequence>
		</div>
	);
};
