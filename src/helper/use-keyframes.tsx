import {useMemo} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

type ExtrapolateType = 'extend' | 'identity' | 'clamp';

type KeyValues = [
	number,
	number,
	{
		easing?: (input: number) => number;
		extrapolateLeft?: ExtrapolateType;
		extrapolateRight?: ExtrapolateType;
	}?
];

type KeyFramesProps = (
	keyFrames: [number, number][],
	keyValues: KeyValues[] | KeyValues[][]
) => number[];

export const useKeyframes: KeyFramesProps = (keyFrames, keyValues) => {
	const frame = useCurrentFrame();

	return useMemo(() => {
		const lastKeyFrame = keyFrames.length - 1;
		const normalizeKeyValues = Array.isArray(keyValues[0][0])
			? (keyValues as KeyValues[][])
			: (keyValues as KeyValues[]).reduce((acc, values) => {
					acc.push([values]);
					return acc;
			  }, [] as KeyValues[][]);

		const returnValues: number[] = [];
		const isFrameInRang = keyFrames.findIndex(
			(item, i) =>
				frame >= item[0] && frame <= keyFrames[i < lastKeyFrame ? i + 1 : i][0]
		);
		if (isFrameInRang > -1) {
			normalizeKeyValues[isFrameInRang].forEach(
				([startValue, endValue, options]) => {
					returnValues.push(
						interpolate(
							frame,
							keyFrames[isFrameInRang],
							[startValue, endValue],
							{extrapolateLeft: 'clamp', extrapolateRight: 'clamp', ...options}
						)
					);
				}
			);
			return returnValues;
		}
		if (keyFrames[lastKeyFrame][0] <= frame) {
			normalizeKeyValues[lastKeyFrame].forEach(
				([startValue, endValue, options]) => {
					returnValues.push(
						interpolate(
							frame,
							keyFrames[lastKeyFrame],
							[startValue, endValue],
							{extrapolateLeft: 'clamp', extrapolateRight: 'clamp', ...options}
						)
					);
				}
			);
			return returnValues;
		}
		normalizeKeyValues[0].forEach(([startValue, endValue, options]) => {
			returnValues.push(
				interpolate(frame, keyFrames[0], [startValue, endValue], {
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
					...options,
				})
			);
		});
		return returnValues;
	}, [frame, keyFrames, keyValues]);
};
