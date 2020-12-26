const ghPages = require('gh-pages');

ghPages.publish('public', {
	branch: 'gh-pages',
	repo: 'https://github.com/tannerntannern/blog.git',
}, err => {
	console.error(err);
});
