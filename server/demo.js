import clickometer from "./index.js";

(() => {
  // const percentatgeElement = document.querySelector(".app-percentatge");

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
})();
