const ghPages = require('gh-pages');

console.info('Starting publish...');
ghPages.publish('public', {
	branch: 'gh-pages',
	repo: 'https://github.com/tannerntannern/blog.git',
}, err => {
	console.error(err);
});
console.info('Publish complete!');
