const puppeteer = require('puppeteer');

describe('CSS Testing for Health Care Management System', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:5500'); // Update the URL if necessary
    });

    afterAll(async () => {
        await browser.close();
    });

    test('should have correct styles applied to navigation links', async () => {
        const linkStyle = await page.$eval('nav a', (element) => {
            return window.getComputedStyle(element).getPropertyValue('text-decoration');
        });
        expect(linkStyle).toBe('none');
    });

    test('should have correct font family for body', async () => {
        const bodyFont = await page.$eval('body', (element) => {
            return window.getComputedStyle(element).getPropertyValue('font-family');
        });
        expect(bodyFont).toBe('Arial, sans-serif');
    });
});
