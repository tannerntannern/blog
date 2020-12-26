import React from 'react';
import Paragraph from '@narative/gatsby-theme-novela/src/components/Paragraph';

type FiddleEmbedProps = {
	link: string,
};

export default (props: FiddleEmbedProps) => (
	<Paragraph>
		<iframe
			width="100%"
			height="300"
			src={props.link}
			allowFullScreen={true}
			frameBorder="0"/>
	</Paragraph>
);
