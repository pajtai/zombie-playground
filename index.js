var Browser = require("zombie");

require("assert");

browser = Browser.create();

browser.visit("http://solid-interactive.github.io/masseuse-examples/two-way-binding/", function (error) {

    try {
        browser.assert.text('h1', 'Hello world!');
        console.log(browser.html('h1'));

        browser.fill('input', 'boomy');

        console.log(browser.html('h1'));
        browser.assert.text('h1', 'boomy');
    } catch (e) {
        console.log(e);
    }

    console.log('~ all done ~');
    browser.close();
});
