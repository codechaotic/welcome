exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost',
  specs: ['test/spec.js'],
  capabilities: {
    'browserName': 'chrome'
  }
}
