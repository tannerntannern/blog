import React from 'react';

export const PkgLink = ({ pkg }: { pkg: string }) => (
	<a href={`https://www.npmjs.com/package/${pkg}`} target="_blank">{pkg}</a>
);

const imgStyle = {
	margin: '0 15px',
};

export const PkgSize = ({ pkg }: { pkg: string }) => (
	<a href={`https://bundlephobia.com/result?p=${pkg}`} target="_blank">
		<img style={imgStyle} alt="Bundlephobia Size" src={`https://badgen.net/bundlephobia/min/${pkg}`}/>
	</a>
);

export const PkgDownloads = ({ pkg }: { pkg: string }) => (
	<a href={`https://www.npmjs.com/package/${pkg}`} target="_blank">
		<img style={imgStyle} alt="Downloads per month" src={`https://badgen.net/npm/dm/${pkg}`}/>
	</a>
);

export const PkgDependents = ({ pkg }: { pkg: string }) => (
	<a href={`https://www.npmjs.com/browse/depended/${pkg}`} target="_blank">
		<img style={imgStyle} alt="Dependents" src={`https://badgen.net/npm/dependents/${pkg}`}/>
	</a>
);
