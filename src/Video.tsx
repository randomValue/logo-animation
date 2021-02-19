import {Composition} from 'remotion';
import {LogoComposition} from './logo-composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Comp"
				component={LogoComposition}
				durationInFrames={101}
				fps={25}
				width={1920}
				height={1080}
			/>
		</>
	);
};
