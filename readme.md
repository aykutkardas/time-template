# Time Template

Time format and template apply.

## Install

```sh
npm install time-template
```

```sh
yarn add time-template
```

---

## Usage

```js
import timeTemplate from "time-template";
```

Example Time (712850 seconds)

```js
const time = timeTemplate(712850);

console.log(time); // { Y:0, M:0, W:1, D:1, h:6, m:0, s:50 }
```

### Customize Output

```js
const time = timeTemplate(712850, { format: "h:m:s" });

console.log(time); // {h: 198, m: 0, s: 50}
```

### Template Apply

```js
const time = timeTemplate(712850, {
  format: "h:m:s",
  template: "{h} hour {m} minute {s} seconds"
});

console.log(time); // "198 hour 0 minute 50 seconds"
```

---

| Name | Description |
| ---- | ----------- |
| Y    | Year        |
| M    | Month       |
| W    | Week        |
| D    | Day         |
| h    | Hour        |
| m    | Minute      |
| s    | Seconds     |
