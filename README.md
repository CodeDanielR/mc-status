This package will allow you to get information about minecraft servers or accounts!

This package using [MCApi](https://mcapi.us).

**Install:**

```
npm i mc-status
```

**Requiring the package:**

```js
const mcStatus = require('mc-status');
```

**Get Server Data:**

```js
const data = await mcStatus.getServerData({ ip: "example.com", port: 25565 });
console.log(data)
```