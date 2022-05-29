const { expect } = require('chai');
const { chromium } = require('playwright-chromium');
let browser, page;

const mockData = {
    "author": "Mimi",
    "content": "Hello, I Am Mimi."
};


describe('E2E tests', () => {
   // before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });

    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    function json(data) {
        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        };
    }

    it('refresh button sends request and recieves response to the server', async () => {

        await page.route('**/jsonstore/messenger', (route) => route.fulfill(json(mockData)));
        await page.goto('http://127.0.0.1:5500/index.html');

        const [response] = await Promise.all([
            page.waitForResponse(response => response.url().includes('jsonstore/messenger')),
            page.click('#refresh')
        ]);

        expect(response.statusText()).to.equal('OK');
    });


    it('fills in input fields', async () => {
        //await page.route('**/jsonstore/messenger', (route) => route.fulfill(json(mockData)))

        await page.goto('http://127.0.0.1:5500/index.html')

        await page.fill('#author', 'Pesho');
        await page.fill('#content', 'Pesho testa');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'),
            page.click('#submit')
        ]);
        const data = JSON.parse(request.postData());

        expect(data.author).to.be.equal('Pesho');
        expect(data.content).to.be.equal('Pesho testa');

    });
});