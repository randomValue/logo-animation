import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {LogoComposition} from './logo-composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Comp"
				component={LogoComposition}
				durationInFrames={150}
				fps={25}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
