module.exports = {
    ci: {
	collect: {
	    staticDistDir: './output/web',
	},
	assert: {
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
