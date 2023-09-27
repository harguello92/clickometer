import clickometer from "./index.js";

(() => {
  clickometer({
    DOMElement: document,
    animation: true,
    maxClicks: 10,
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
})();
