import React from 'react';

type VideoEmbedProps = {
	id: string,
};

export default (props: VideoEmbedProps) => (
	<div style={{ textAlign: 'center' }}>
		<iframe src={`https://www.youtube.com/embed/${props.id}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen/>
	</div>
);

