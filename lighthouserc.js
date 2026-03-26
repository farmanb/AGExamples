module.exports = {
    ci: {
	collect: {
	    staticDistDir: './output/web',
	    numberOfRuns: 1,
	    settings: {
		onlyCategories: ['accessibility']
	    },
	},
	assert: {
	    preset: 'lighthouse:no-pwa',
	    assertions: {
		// Enforce a minimum accessibility score
		'categories:accessibility': ['error', { minScore: 0.9 }],
	    },
	},
	upload: {
	    target: 'temporary-public-storage',
	},
    },
};
