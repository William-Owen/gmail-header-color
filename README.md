# Gmail Color Changer Extension

## Description

The Gmail Color Changer is a Chrome extension created by William Owen that dynamically alters the color of the Gmail header. This change is based on specific conditions involving the `aria-label` attribute of a particular element in Gmail. This extension now operates interactively, allowing you to activate its functionality with a click on the extension icon.

## Features

- **Interactive Color Change**: Manually trigger the color change of the Gmail header by clicking the extension icon.
- **Customizable Conditions**: Modify conditions and associated colors to fit your preferences.
- **Designed for Gmail**: Tailored to work with `mail.google.com`.

## How It Works

The extension utilizes a set of predefined conditions, each comprising a string and an associated color code. When you click the extension icon, it checks all open Gmail tabs. If it finds the `aria-label` attribute of a specific element containing any of these strings, it changes the Gmail header's background color in those tabs to the designated color.

## Installation

1. Download the extension files to your computer.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable 'Developer mode' at the top right.
4. Click 'Load unpacked' and select the extension directory.

## Customization

Modify the `conditions` array in the `content.js` file to customize the trigger conditions. Format each entry as `["string to find", "#colorCode"]`. For example:

```javascript
const conditions = [
  ["deviantrobot.com", "#ff0000"],
  ["wo.dev", "#00ff00"],
];
```

## Usage
After installation, click the extension icon whenever you have Gmail open. The extension will scan your open Gmail tabs and apply the color changes where applicable. It does not run automatically upon opening Gmail; a manual trigger through the extension icon is required.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
William Owen (wo.dev)