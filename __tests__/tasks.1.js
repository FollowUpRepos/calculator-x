import puppeteer from "puppeteer";
import fs from 'fs';
import liveServer from 'live-server';
const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
}

let browser;
let page;

beforeAll(async () => {
    liveServer.start({
        port: 8181,
        open: false,
        logLevel: 0,
    })
    await new Promise(resolve => liveServer.watcher.on('ready', resolve))
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('http://localhost:8181');
}, 30000);

afterAll((done) => {
    try {
        liveServer.shutdown();
        // `this.puppeteer` causes an error. Perhaps `browser`
        // is what was meant.

        // this.puppeteer.close();
        browser.close();
    } catch (e) {
        console.log("e:", e); 
    }
    done();
});

describe('Export', () => {
    it("`percentage.js` has `modulo`, `percentage`, `percentagOf` and `difference` exports", async () => {
        const { modulo, percentage, percentageOf, difference } = await import("../modules/percentage.js");
        expect(modulo).toBeDefined()
        expect(percentage).toBeDefined()
        expect(percentageOf).toBeDefined()
        expect(difference).toBeDefined()
    });
    it("`aspect-ratio.js` has `calculateAspectRatio` export", async () => {
        const { calculateAspectRatio } = await import("../modules/aspect-ratio.js");
        expect(calculateAspectRatio).toBeDefined()
    });
});

describe('Import', () => {
    it("`index.js` imports `modulo`, `percentage`, `percentagOf`, `difference` and  `calculateAspectRatio` functions", async () => {
        const indexFileContents = fs
            .readFileSync("./modules/index.js")
            .toString("utf-8")
            .replace(/ /g, "");
        // Edit regexes to allow new lines as well as white space
        expect(indexFileContents).toMatch(/import[\s\S]*modulo[\s\S]*from[\s\S]*\/percentage.js/);
        expect(indexFileContents).toMatch(/import[\s\S]*percentage[\s\S]*from[\s\S]*\/percentage.js/);
        expect(indexFileContents).toMatch(/import[\s\S]*percentageOf[\s\S]*from[\s\S]*\/percentage.js/);
        expect(indexFileContents).toMatch(/import[\s\S]*difference[\s\S]*from[\s\S]*\/percentage.js/);
        expect(indexFileContents).toMatch(/import[\s\S]*from[\s\S]*\/aspect-ratio.js/);
    });
    it("`modules/index.js` should be included in `index.html` using script tag", async () => {
        // Both "modules/..." and "./modules/..." are valid references
        // to the modules folder. Both references should be accepted.
        let scriptTag
        try {
            scriptTag = await page.$eval('script[src="modules/index.js"]', (el) => el.outerHTML);
        } catch {
           scriptTag = await page.$eval('script[src="./modules/index.js"]', (el) => el.outerHTML);
        }

        expect(scriptTag).toBeDefined();
    });
});

describe("Modulo Calculation", () => {
    it("Page should display correct modulo result based on entered values", async () => {
        await page.click('#modulo_1', {clickCount: 3})
        await page.type('#modulo_1', '10')
        await page.click('#modulo_2', {clickCount: 3})
        await page.type('#modulo_2', '3')
        await page.keyboard.press('Enter')
        await new Promise(resolve => setTimeout(resolve, 100))
        const result = await page.$eval('#modulo_result', el => el.value)
        expect(result).toBe('1')
    });
});
describe("Percentage Calculation", () => {
    it("Page should display correct percentage result based on entered values", async () => {
        await page.click('#percentage_1', {clickCount: 3})
        await page.type('#percentage_1', '40')
        await page.click('#percentage_2', {clickCount: 3})
        await page.type('#percentage_2', '100')
        await page.keyboard.press('Enter')
        await new Promise(resolve => setTimeout(resolve, 100))
        const result = await page.$eval('#percentage_result', el => el.value)
        expect(result).toBe('40')
    });
    it("Page should display correct 'percentage of' result based on entered values", async () => {
        await page.click('#percentageOf_1', {clickCount: 3})
        await page.type('#percentageOf_1', '40')
        await page.click('#percentageOf_2', {clickCount: 3})
        await page.type('#percentageOf_2', '100')
        await page.keyboard.press('Enter')
        await new Promise(resolve => setTimeout(resolve, 100))
        const result = await page.$eval('#percentageOf_result', el => el.value)
        expect(result).toBe('40')
    });
    it("Page should display correct difference percentage result based on entered values", async () => {
        await page.click('#difference_1', {clickCount: 3})
        await page.type('#difference_1', '10')
        await page.click('#difference_2', {clickCount: 3})
        await page.type('#difference_2', '3')
        await page.keyboard.press('Enter')
        await new Promise(resolve => setTimeout(resolve, 500))
        const result = await page.$eval('#difference_result', el => el.value)
        expect(result).toBe('-70')
    });
});

describe("Aspect Ratio Calculation", () => {
    it("Page should display correct new height based on entered original width and height and new width", async () => {
        await page.click('#ratio_1', {clickCount: 3})
        await page.type('#ratio_1', '100')
        await page.click('#ratio_2', {clickCount: 3})
        await page.type('#ratio_2', '100')
        await page.click('#ratio_result-width', {clickCount: 3})
        await page.type('#ratio_result-width', '200')
        await page.keyboard.press('Enter')
        await new Promise(resolve => setTimeout(resolve, 100))
        const result = await page.$eval('#ratio_result-height', el => el.value)
        expect(result).toBe('200')
    });
});