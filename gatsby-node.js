/**
 * Old Hexo blog had slightly different URL formats, so we want to redirect those.  We use gatsby-plugin-meta-redirect
 * to help with this.  Note, as far as I can tell, it only works for the production build, not the dev server.
 */
const oldBlogRedirects = {
	'/2019/01/25/2019-01-21-Creating-an-Engraved-Leather-Effect-with-CSS/':
			'/2019/01/25/creating-an-engraved-leather-effect-with-css',
	'/2019/02/18/Using-the-NPM-API-to-Get-Latest-Package-Versions/':
			'/2019/02/18/using-the-npm-api-to-get-latest-package-versions',
	'/2019/06/25/Budgeteer-A-Budget-Balancing-Tool/':
			'/2019/06/25/budgeteer-a-budget-balancing-tool',
	'/2019/07/28/Node-js-Terminal-Styling-Packages-Compared/':
			'/2019/07/28/node.js-terminal-styling-packages-compared',
	'/2019/10/09/How-I-Made-a-Custom-Controller-With-Arduino/':
			'/2019/10/09/how-i-made-a-custom-controller-with-arduino',
};

module.exports.createPages = async ({ actions }) => {
	const { createRedirect } = actions;
	for (let oldPath in oldBlogRedirects) {
		const newPath = oldBlogRedirects[oldPath];
		createRedirect({
			fromPath: oldPath,
			toPath: newPath,
			isPermanent: true,
		});
	}
};
