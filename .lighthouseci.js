/* eslint-env node */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      numberOfRuns: 3,
    },
    assert: {
      // Performance thresholds
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['warn', { minScore: 0.8 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.7 }],

        // Be more lenient with PWA requirements since this is a landing page
        'categories:pwa': 'off',

        // Individual audit overrides - make them warnings instead of errors
        'csp-xss': 'warn',
        'installable-manifest': 'off',
        'maskable-icon': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'warn',

        // Performance - be more lenient
        'unused-javascript': ['warn', { maxLength: 2 }],
        'render-blocking-resources': ['warn', { maxLength: 2 }],
        'unsized-images': 'warn',

        // SEO - keep this as warning
        'meta-description': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
