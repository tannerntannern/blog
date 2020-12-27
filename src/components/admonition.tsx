import React, { CSSProperties } from 'react';
import Paragraph from '@narative/gatsby-theme-novela/src/components/Paragraph';

const baseIconStyle: CSSProperties = {
	width: '28px',
	height: '28px',
};

const green = '#1cd234';
const blue = '#1b8cd6';
const yellow = '#e2a73d';
const warning = '#dd2323';
const alpha = '35';
const sideAccentWidth = 6;

type IconProps = {
	style?: CSSProperties,
};

const admonitionTypes = {
	info: {
		color: blue,
		backgroundColor: `${blue}${alpha}`,
		Icon: (props: IconProps) => (
			<svg style={{ ...baseIconStyle, ...props.style }} viewBox="0 0 24 24">
				<path fill="currentColor" d="M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z" />
			</svg>
		),
	},
	question: {
		color: yellow,
		backgroundColor: `${yellow}${alpha}`,
		Icon: (props: IconProps) => (
			<svg style={{ ...baseIconStyle, ...props.style }} viewBox="0 0 24 24">
				<path fill="currentColor" d="M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" />
			</svg>
		),
	},
	warning: {
		color: warning,
		backgroundColor: `${warning}${alpha}`,
		Icon: (props: IconProps) => (
			<svg style={{ ...baseIconStyle, ...props.style }} viewBox="0 0 24 24">
				<path fill="currentColor" d="M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z" />
			</svg>
		),
	},
};

type AdmonitionProps = {
	children: string,
	type: keyof typeof admonitionTypes,
};

export default (props: AdmonitionProps) => {
	const { type, children: content } = props;
	const { color, backgroundColor, Icon } = admonitionTypes[type];
	const paragraphStyle: CSSProperties = {
		position: 'relative',
		paddingLeft: '1.2em',
		paddingTop: '0.8em',
		paddingBottom: '0.8em',
		paddingRight: '0.8em',
		borderLeft: `${sideAccentWidth}px solid ${color}`,
		backgroundColor,
	};
	const iconStyle: CSSProperties = {
		position: 'absolute',
		top: '50%',
		left: 0,
		color: 'white',
		transform: `translate(-50%, -50%) translate(-${sideAccentWidth / 2}px, 0)`,
		backgroundColor: `${color}`,
		borderRadius: '50%',
		border: `3px solid ${color}`,
	};

	return (
		<Paragraph style={paragraphStyle}>
			<Icon style={iconStyle}/> {content}
		</Paragraph>
	);
};
