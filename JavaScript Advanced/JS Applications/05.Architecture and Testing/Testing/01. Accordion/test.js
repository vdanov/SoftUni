const { chromium } = require('playwright-chromium');
const { expect, assert } = require('chai');

let browser, page;

describe('E2E tests', () => {
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('All articles are displayed', async () => {
        await page.goto('http://127.0.0.1:5500/index.html');
        const required1 = await page.textContent('text="Scalable Vector Graphics"');
        const required2 = await page.textContent('text="Open standard"');
        const required3 = await page.textContent('text="Unix"');
        const required4 = await page.textContent('text="ALGOL"');

        const article1 = 'Scalable Vector Graphics';
        const article2 = 'Open standard';
        const article3 = 'Unix';
        const article4 = 'ALGOL';

        expect(article1).to.be.equal(required1);
        expect(article2).to.be.equal(required2);
        expect(article3).to.be.equal(required3);
        expect(article4).to.be.equal(required4);
    });

    it('"More" button functions as expected', async () => {
        await page.goto('http://127.0.0.1:5500/index.html');
        await page.click('text="More"');
        const actual = 'Scalable Vector Graphics (SVG) is an Extensible Markup Language (XML)-based vector image format for two-dimensional graphics with support for interactivity and animation. The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999.'
        const result = await page.textContent('p');
        expect(actual).to.be.equal(result);
    });

    it('button changes from "More" to "Less" when clicked', async () => {
        await page.goto('http://127.0.0.1:5500/index.html');
        await page.click('text="More"');
        const result = await page.textContent('button');
        const actual = 'Less';

        expect(actual).to.equal(result);
    });

    it('clicking "Less" button hides content', async () => {
        await page.goto('http://127.0.0.1:5500/index.html');
        await page.click('text="More"');
        await page.click('text="Less"');
        const result = await page.isVisible('p');
        expect(result).to.be.false;
    });
});