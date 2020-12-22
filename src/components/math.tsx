import React  from 'react';
import MathJax from 'react-mathjax-preview';

type MathProps = {
	children: string,
};

const mathJaxConfig = {
	tex2jax: {
		inlineMath: [ ['$', '$'] ],
	},
};

// Note: also see styles in global.css

export default (props: MathProps) => (
	<MathJax math={props.children} config={mathJaxConfig}/>
);
