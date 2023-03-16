const puppeteer = require('puppeteer');


async function takeScreenshot(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle0',
    });
    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
}

takeScreenshot('https://superdev.ro')