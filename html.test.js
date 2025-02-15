const puppeteer = require('puppeteer');

describe('Health Care Management System', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('file://' + __dirname + '/../src/index.html');
    });

    afterAll(async () => {
        await browser.close();
    });

    test('should have the correct title', async () => {
        const title = await page.title();
        expect(title).toBe('Health Care Management System');
    });

    test('should display the header correctly', async () => {
        const headerText = await page.$eval('header h1', el => el.textContent);
        expect(headerText).toBe('Health Care Management System');
    });

    test('should have navigation links', async () => {
        const navLinks = await page.$$eval('nav a', links => links.map(link => link.getAttribute('href')));
        expect(navLinks).toContain('index.html');
        expect(navLinks).toContain('login.html');
        expect(navLinks).toContain('register_patient.html');
        expect(navLinks).toContain('register_employee.html');
    });

    test('should display the main section correctly', async () => {
        const mainText = await page.$eval('main h2', el => el.textContent);
        expect(mainText).toBe('Welcome to the Health Care Management System');
    });

    test('should display the footer correctly', async () => {
        const footerText = await page.$eval('footer p', el => el.textContent);
        expect(footerText).toBe('© 2025 Health Care Management System');
    });
});
