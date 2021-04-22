import {Composition} from 'remotion';
import {AnimatedName} from './compositions/AnimatedName';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="AnimatedName"
				component={AnimatedName}
				durationInFrames={120}
				fps={30}
				width={1440}
				height={400}
				defaultProps={{
					fullName: 'Wojciech Rupik',
				}}
			/>
		</>
	);
};
