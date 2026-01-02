module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'html'],
    testMatch: ['**/tests/**/*.test.js']
};