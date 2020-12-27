import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import { render } from 'katex';

type LatexProps = {
	className,
	children: string,
	displayMode?: boolean,
};

const Latex = ({ className, children: tex, displayMode = false }: LatexProps) => {
	const renderEl = useRef<HTMLDivElement>(null);

	useEffect(() => {
		render(tex, renderEl.current, {
			displayMode,
			throwOnError: false,
			output: 'html',
		});
	}, [tex]);

	return (
		<div ref={renderEl} style={displayMode ? {} : { display: 'inline' }} className={className}>
			{tex}
		</div>
	);
};

// This styling library is really weird, but trying to play nice with the novela theme
// See https://emotion.sh/docs/styled#styling-any-component
export default styled(Latex)`
	color: ${p => p.theme['colors'].articleText};
`
