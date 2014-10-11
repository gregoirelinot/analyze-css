exports.tests = [
	{
		css: '.foo body > h2 {}',
		metrics: {
			redundantChildNodesSelectors: 0
		}
	},
	// ul li
	{
		css: 'ul li a {}',
		metrics: {
			redundantChildNodesSelectors: 1
		}
	},
	{
		css: 'ul > li a {}',
		metrics: {
			redundantChildNodesSelectors: 1
		}
	},
	{
		css: 'ul + li a {}',
		metrics: {
			redundantChildNodesSelectors: 0
		}
	},
	{
		css: 'ul a {}',
		metrics: {
			redundantChildNodesSelectors: 0
		}
	},
	{
		css: '.box ul {}',
		metrics: {
			redundantChildNodesSelectors: 0
		}
	},
	{
		css: 'li a {}',
		metrics: {
			redundantChildNodesSelectors: 0
		}
	},
	// table tr
	{
		css: '.foo table.test tr.row {}',
		metrics: {
			redundantChildNodesSelectors: 1
		}
	},
	{
		css: '.foo table th {}',
		metrics: {
			redundantChildNodesSelectors: 1
		}
	},
	{
		css: '.foo table td {}',
		metrics: {
			redundantChildNodesSelectors: 0
		}
	},
	// select option
	{
		css: '.form select option {}',
		metrics: {
			redundantChildNodesSelectors: 1
		}
	},
];
