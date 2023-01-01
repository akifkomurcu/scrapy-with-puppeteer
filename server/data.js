

const puppeteer = require('puppeteer');


exports.scrape = async () => {
    const url = `https://akifkomurcu.github.io/`;
    const browser = await puppeteer.launch({
        // headless: false,
    });
    const page = await browser.newPage();
    await page.goto(url);
    //construct şekilde element edinmek
    const [element] = await page.$x(`/html/body/div/div[1]/div`);
    //getproperty bir js fonksiyonu. HTML elementlerinin değerlerini edinirsin
    const textContent = await element.getProperty("innerText");

    //jsonStringify ile aynı işi yaptık. dönen değeri json olarak aldık
    const textvalue = await textContent.jsonValue();

    console.log(textvalue);
    return textvalue;
    // browser.close();


};


// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
  
//     await page.goto('https://developers.google.com/web/');
  
//     // Type into search box.
//     await page.type('.devsite-search-field', 'Headless Chrome');
  
//     // Wait for suggest overlay to appear and click "show all results".
//     const allResultsSelector = '.devsite-suggest-all-results';
//     await page.waitForSelector(allResultsSelector);
//     await page.click(allResultsSelector);
  
//     // Wait for the results page to load and display the results.
//     const resultsSelector = '.gsc-results .gs-title';
//     await page.waitForSelector(resultsSelector);
  
//     // Extract the results from the page.
//     const links = await page.evaluate(resultsSelector => {
//       return [...document.querySelectorAll(resultsSelector)].map(anchor => {
//         const title = anchor.textContent.split('|')[0].trim();
//         return `${title} - ${anchor.href}`;
//       });
//     }, resultsSelector);
  
//     // Print all the files.
//     console.log(links.join('\n'));
  
//     await browser.close();
//   })();