const conditions = [
    ["deviantrobot.com", "#a50039"],
    ["wo.dev", "#0074a5"],
    ["william.owen.uk", "#ff8b00"],
];

function changeBackgroundColorIfConditionsMet() {
    try {
        const xpath = '/html/body/div[7]/div[3]/div/div[1]/div/div[2]/div[2]/header/div[2]/div[3]/div[1]/div[2]/div[2]/div/a';
        const targetElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        
        if (targetElement && targetElement.getAttribute('aria-label')) {
            const ariaLabel = targetElement.getAttribute('aria-label').toLowerCase();
            console.log('Found element with aria-label:', ariaLabel);

            for (const condition of conditions) {
                const [partialString, color] = condition.map(item => item.toLowerCase());
                if (ariaLabel.includes(partialString)) {
                    console.log('Match found for:', partialString, 'Applying color:', color);
                    const headerXpath = '/html/body/div[7]/div[3]/div/div[1]/div/div[2]/div[2]/header';
                    const headerElement = document.evaluate(headerXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                    if (headerElement) {
                        headerElement.style.backgroundColor = color;
                        break;
                    }
                }
            }
        } else {
            console.log('Target element or aria-label not found.');
        }
    } catch (e) {
        console.error('Error occurred:', e);
    }
}

changeBackgroundColorIfConditionsMet();
