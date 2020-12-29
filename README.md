# Format Date

Use to format date from Timestamp into indonesian format

## Installation

```sh
npm i node-format-date
```

## Usage

```javascript
const { formatFullDate, formatTime, formatDay, formatMonth } = require('node-format-date');

const ts = new Date(); // 2020-12-29T05:25:43.223Z

console.log(formatFullDate(ts)); // Kamis, 29 Oktober 2020
console.log(formatTime(ts)); // 11:31
console.log(formatDay(ts)); // Kamis
console.log(formatMonth(ts)); // Oktober
```
