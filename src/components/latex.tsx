import React, { useEffect, useRef } from 'react';
import { render } from 'katex';

type LatexProps = {
	children: string,
	displayMode?: boolean,
};

export default ({ children: tex, displayMode = false }: LatexProps) => {
	const renderEl = useRef<HTMLDivElement>(null);

	useEffect(() => {
		render(tex, renderEl.current, {
			displayMode,
			throwOnError: false,
			output: 'html',
		});
	}, [tex]);

	return (
		<div ref={renderEl} style={displayMode ? {} : { display: 'inline' }}>
			{tex}
		</div>
	);
};
