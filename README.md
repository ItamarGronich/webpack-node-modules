## How to reproduce:
1. Clone this repo
2. Run `npm ci`
3. Run `npm start` -> a browser window should be opened with the text from index.js
4. Open the browser and webpack terminal side-by-side
5. Edit the file in `node_modules/lodash/get.js` (for example change end of line 30 from `: result;` to `: result + result;`)
6. Watch how webpack recompiles the app when you save the changes to that file.
7. Watch the ouput in the HTML page change to twice the result.