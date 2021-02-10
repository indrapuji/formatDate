# Format Date

Use to format date from Timestamp into indonesian format

## Installation

**npm**

```sh
npm i node-format-date
```

**yarn**

```sh
yarn add node-format-date
```

## Usage

```javascript
const { formatFullDate, formatTime, formatDay, formatMonth, formarDate } = require('node-format-date');

const ts = new Date(); // 2020-12-29T05:25:43.223Z

console.log(formatFullDate(ts)); // Kamis, 29 Oktober 2020
console.log(formatDate(ts)); // 29 Oktober 2020
console.log(formatTime(ts)); // 11:31
console.log(formatDay(ts)); // Kamis
console.log(formatMonth(ts)); // Oktober
```

```javascript
import React from 'react';
import { formatFullDate, formatTime, formatDay, formatMonth, formatDate } from 'node-format-date';

const FormatDate = () => {
    const ts = new Date() // 2020-12-29T05:25:43.223Z

    return (
        .....
        <p>{formatFullDate(ts)}</p> // Kamis, 29 Oktober 2020
        <p>{formatDate(ts)}</p> // 29 Oktober 2020
        <p>{formatTime(ts)}</p> // 11:31
        <p>{formatDay(ts)}</p> // Kamis
        <p>{formatMonth(ts)}</p> // Oktober
        .....
    )
}
```
