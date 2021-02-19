import {CSSProperties} from 'react';
import {HEXColors} from '../logo-composition';

type LogoPathTypes = {
	strokeDash: number;
	strokeDashoffset: number;
	wrapperStyle: CSSProperties;
	colors: HEXColors;
};

export const LogoPath = ({
	strokeDash,
	strokeDashoffset,
	wrapperStyle,
	colors,
}: LogoPathTypes) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: '1 1 0%',
				...wrapperStyle,
			}}
		>
			<svg
				x="0px"
				y="0px"
				width="179.9px"
				height="152.2px"
				viewBox="-8 0 195.9 152.2"
				style={{
					width: '377px',
					height: '329px',
					fill: 'none',
					stroke: colors.light,
					strokeWidth: '4px',
					strokeDasharray: `${strokeDash} 1000`,
					strokeLinecap: 'round',
					strokeDashoffset,
				}}
			>
				<defs />
				<path
					d="M63,151.9c0,0,50-74.2,64-95.4s52.3-6.2,52.3,20c0,25-25.2,40.4-44.1,28.9s-78.5-49-95.8-59.6
	C16.6,31.9-8.4,64.7,3.6,89s43.3,18,52.7,3.4s59.1-92.1,59.1-92.1"
				/>
			</svg>
		</div>
	);
};
