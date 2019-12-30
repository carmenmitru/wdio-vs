describe("Iframe", () => {
    beforeEach(() => {
        browser.url("./#/iframe");
    })
    it('should save screenshot of fullpage', () => {
        browser.saveFullPageScreen('iframe', { /* some options*/ });
    });

    it('should compare successful with a baseline', () => {
        expect(browser.checkScreen('iframe', { /* some options*/ })).to.equal(0);
    });

});