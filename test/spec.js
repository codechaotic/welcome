describe('Welcome', function() {
  it('should have a title', function() {
    //browser.ignoreSynchronization = true // Tempoarary Fix
    browser.get('/')
    expect(browser.getTitle()).toEqual('Welcome')
  });
});
