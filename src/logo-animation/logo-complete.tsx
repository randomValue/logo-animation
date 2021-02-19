import {CSSProperties} from 'react';
import {HEXColors} from '../logo-composition';

type LogoCompleteProps = {
	colors: HEXColors;
	circleStyles?: CSSProperties;
	firstMaskStyles?: CSSProperties;
	secondMaskStyles?: CSSProperties;
	thirdMaskStyles?: CSSProperties;
};

export const LogoComplete = ({
	colors,
	circleStyles,
	firstMaskStyles,
	secondMaskStyles,
	thirdMaskStyles,
}: LogoCompleteProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="52"
			height="52"
			viewBox="0 0 52 52"
			style={{
				position: 'absolute',
				left: 0,
				top: 0,
				transform: 'translate(-50%, -50%)',
				...circleStyles,
			}}
		>
			<circle
				r="26"
				cx="26"
				cy="26"
				fill={colors.light}
				mask="url(#loader--path-mask)"
			/>
			<mask id="loader--path-mask">
				<circle fill={colors.white} r="28" cx="26" cy="26" />
				<path
					stroke={colors.black}
					style={{
						fill: 'none',
						strokeWidth: 3,
						strokeMiterlimit: 10,
						strokeDasharray: 112,
						...firstMaskStyles,
					}}
					d="M30.825 12L19.94 28.762c-1.704 2.624-5.213 3.37-7.837 1.665-2.624-1.704-3.37-5.212-1.666-7.837 1.705-2.624 5.213-3.37 7.837-1.665l15.63 10.15c2.625 1.704 6.134.96 7.838-1.665 1.704-2.625.958-6.133-1.666-7.837-2.624-1.704-6.133-.96-7.837 1.665L21.353 40"
				/>
				<path
					stroke={colors.black}
					style={{
						fill: 'none',
						strokeWidth: 3,
						strokeMiterlimit: 10,
						strokeDasharray: 112,
						...secondMaskStyles,
					}}
					d="M30.825 12L19.94 28.762c-1.704 2.624-5.213 3.37-7.837 1.665-2.624-1.704-3.37-5.212-1.666-7.837 1.705-2.624 5.213-3.37 7.837-1.665l15.63 10.15c2.625 1.704 6.134.96 7.838-1.665 1.704-2.625.958-6.133-1.666-7.837-2.624-1.704-6.133-.96-7.837 1.665L21.353 40"
				/>
				<path
					stroke={colors.black}
					style={{
						fill: 'none',
						strokeWidth: 3,
						strokeMiterlimit: 10,
						strokeDasharray: 112,
						...thirdMaskStyles,
					}}
					d="M30.825 12L19.94 28.762c-1.704 2.624-5.213 3.37-7.837 1.665-2.624-1.704-3.37-5.212-1.666-7.837 1.705-2.624 5.213-3.37 7.837-1.665l15.63 10.15c2.625 1.704 6.134.96 7.838-1.665 1.704-2.625.958-6.133-1.666-7.837-2.624-1.704-6.133-.96-7.837 1.665L21.353 40"
				/>
			</mask>
		</svg>
	);
};
