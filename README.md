# Clickometer

Light library to handle the clicks over DOM element with javascript easily.

# Install

npm

```BASH
npm install clickometer
```

yarn

```BASH
npm add clickometer
```

pnpm

```BASH
pnpm add clickometer
```

# Alternatively you can use the script from CDN

```HTML
<script async src="https://unpkg.com/clickometer@3.0.0/dist/clickometer.browser.min.js">
```

# Usage example

```JS
  clickometer({
    DOMElement: document,
    animation: true,
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
