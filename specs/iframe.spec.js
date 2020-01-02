describe("Iframe", () => {
    beforeEach(() => {
        browser.url("./#/iframe");
    })
    it('should save screenshot of fullpage', () => {
        browser.saveFullPageScreen('iframe', {});
    });

    it('should compare successful with a baseline', () => {
        expect(browser.checkScreen('iframe', {})).to.equal(0);
    });

    it('should save screenshot of navbar', () => {
        browser.saveElement(browser.$('nav'), 'navbar', {});

    });

    it('should compare navabr successful with a baseline navbar', () => {
        expect(browser.checkElement(browser.$('nav'), 'navbar', {})).to.equal(0);
    });


});
