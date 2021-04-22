import {ReactElement} from 'react';
import {useCurrentFrame} from 'remotion';
import selleoBackground from '../../images/background.png';

interface Props {
	fullName: string;
}

export function AnimatedName({fullName}: Props): ReactElement {
	const frame = useCurrentFrame();

	const wrapperStyle = {
		backgroundImage: `url(${selleoBackground})`,
		flex: '1',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	};

	const divStyle = {
		opacity: frame > 30 ? 1 : frame / 30,
		fontSize: '72px',
		fontFamily: 'Sofia Pro',
		transform: `scale(${frame})`,
	};

	return (
		<div style={wrapperStyle}>
			<div style={divStyle}>{fullName}</div>
		</div>
	);
}
