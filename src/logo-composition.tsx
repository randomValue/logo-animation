import React, {useEffect, useMemo, useState} from 'react';
import {Sequence} from 'remotion';
import colors from './colors/colors.json';
import lightColors from './colors/light-colors.json';
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
	const [currentTime] = useState(new Date());

	const [hexColors, setHexColors] = useState(colors);

	useEffect(() => {
		if (currentTime.getHours() > 12 && currentTime.getHours() < 19) {
			setHexColors((v) => ({
				...v,
				...lightColors,
			}));
		}
	}, [currentTime]);

	const rgbColors = useMemo(
		() =>
			Object.entries(hexColors).reduce((acc, [key, value]) => {
				acc = {...acc, [`${key}`]: hexToRgb(value)};
				return acc;
			}, {} as RGBColors),
		[hexColors]
	);
	const {primary, secondary, tertiary, dark} = rgbColors;
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
				[secondary.r, tertiary.r],
				[secondary.g, tertiary.g],
				[secondary.b, tertiary.b],
			],
			[
				[tertiary.r, dark.r],
				[tertiary.g, dark.g],
				[tertiary.b, dark.b],
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
					colors={hexColors}
					explosionWrapperStyle={{
						left: '49%',
						top: '48.6%',
						transform: 'rotate(38deg)',
					}}
					explosionLineStyle={{
						width: '6px',
						borderRadius: '3px',
					}}
				/>
				<ExplosionLine
					colors={hexColors}
					explosionWrapperStyle={{
						left: '49%',
						top: '48.6%',
						transform: 'rotate(218deg)',
					}}
					explosionLineStyle={{
						width: '6px',
						borderRadius: '3px',
					}}
				/>
			</Sequence>
			<Sequence from={22} durationInFrames={6}>
				<ExplosionLine
					colors={hexColors}
					explosionWrapperStyle={{
						left: '49%',
						top: '48.6%',
						transform: 'rotate(90deg)',
					}}
					explosionLineStyle={{
						width: '6px',
						borderRadius: '3px',
					}}
				/>
				<ExplosionLine
					colors={hexColors}
					explosionWrapperStyle={{
						left: '49%',
						top: '48.6%',
						transform: 'rotate(-90deg)',
					}}
					explosionLineStyle={{
						width: '6px',
						borderRadius: '3px',
					}}
				/>
			</Sequence>
			<Sequence from={0} durationInFrames={35}>
				<LogoLowerDash colors={hexColors} />
			</Sequence>
			<Sequence from={0} durationInFrames={35}>
				<LogoUpperDash colors={hexColors} />
			</Sequence>
			<Sequence from={35} durationInFrames={75}>
				<CirceAnimation colors={hexColors} />
			</Sequence>
		</div>
	);
};
