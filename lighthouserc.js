module.exports = {
    ci: {
	collect: {
	    staticDistDir: './output/web',
	},
	assert: {
	    preset: 'lighthouse:no-pwa',
	    assertions: {
		// Enforce a minimum accessibility score
		'categories:accessibility': ['error', { minScore: 0.9 }],

		// Turn off non-accessibility categories
		'categories:performance': 'off',
		'categories:seo': 'off',
		'categories:best-practices': 'off',
	    },
	},
	upload: {
	    target: 'temporary-public-storage',
	},
    },
};
