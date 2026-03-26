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

		// Silence all the non-accessibility audit noise
		'bf-cache': 'off',
		'deprecations': 'off',
		'font-display': 'off',
		'font-display-insight': 'off',
		'image-delivery-insight': 'off',
		'inspector-issues': 'off',
		'meta-description': 'off',
		'unminified-javascript': 'off',
		'unsized-images': 'off',
		'unused-css-rules': 'off',
		'unused-javascript': 'off',
		'uses-responsive-images': 'off',
		'render-blocking-resources': 'off',
		'render-blocking-insight': 'off',
		'legacy-javascript': 'off',
		'modern-image-formats': 'off',
		'uses-long-cache-ttl': 'off',
		'cache-insight': 'off',
	    },
	},
	upload: {
	    target: 'temporary-public-storage',
	},
    },
};
