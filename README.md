# Clickometer

Light library to handle the clicks over DOM element with javascript easily.

# Install

If you want you can use other npm manager such as yarn, pnpm...

```BASH
npm install clickometer
```

# Alternatively you can use the script from CDN

```HTML
<script async src="https://unpkg.com/clickometer@5.0.0/dist/clickometer.browser.min.js">
```

# Usage example

```JS
import clickometer from "clickometer"

clickometer({
  DOMElement: document,
  maxClicks: 5,
  timeInterval: 1000,
  onChange: ({ percentatge }) => {
    document.body.style.backgroundColor = "initial";
    document.body.innerHTML = percentatge + "%";
  },
  onExceeded: ({ percentatge }) => {
    document.body.style.backgroundColor = "red";
    document.body.innerHTML = `¡Cuidado!, ${percentatge}% completado`;
  },
});
```

# Params

#### DOMElement

Type: `HTMLElement`\
Default: `document.body`

#### maxClicks

Type: `number`\
Default: `5`

#### timeInterval

Type: `number`\
Default: `1000`

#### onChange

Type: `Function`\
Default: `() => {}`

#### onExceeded

Type: `Function`\
Default: `() => {}`

#### customEvents

Type: `Array`\
Default: `[]`
