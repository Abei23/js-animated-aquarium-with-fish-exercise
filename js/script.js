"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const fishInfo = [
    {
      className: "redfish",
      art: "Rød Snapper",
      alder: "2 år",
      latinsknavn: "Lutjanus campechanus",
      længde: "Op til 100 cm",
      vægt: "Typisk 2–4 kg",
      levested: "Mexicanske Golf og det sydøstlige USA"
    },
    {
      className: "orangefish",
      art: "Klovnefisk",
      alder: "3 år",
      latinsknavn: "Amphiprioninae",
      længde: "Op til 11 cm",
      vægt: "Ca. 250 gram",
      levested: "Stillehavets koralrev"
    },
    {
      className: "flatbluefish",
      art: "Paletkirurgfisk",
      alder: "5 år",
      latinsknavn: "Paracanthurus hepatus",
      længde: "Op til 30 cm",
      vægt: "Op til 600 gram",
      levested: "Indiske Ocean og vestlige Stillehav"
    },
    {
      className: "codfish",
      art: "Torsk",
      alder: "6 år",
      latinsknavn: "Gadus morhua",
      længde: "Op til 150 cm",
      vægt: "Op til 25 kg",
      levested: "Nordlige Atlanterhav"
    }
  ];

  const tooltip = document.getElementById("tooltip");

  fishInfo.forEach((fish) => {
    const fishElem = document.querySelectorAll("." + fish.className);

    fishElem.forEach((el) => {
      el.addEventListener("click", (e) => {
        tooltip.innerHTML = `
          <strong>${fish.art}</strong><br>
          🧬 Latinsk navn: ${fish.latinsknavn}<br>
          🧓 Alder: ${fish.alder}<br>
          📏 Længde: ${fish.længde}<br>
          ⚖️ Vægt: ${fish.vægt}<br>
          🌍 Levested: ${fish.levested}
        `;
        tooltip.style.top = `${e.pageY - 40}px`;
        tooltip.style.left = `${e.pageX + 20}px`;
        tooltip.style.opacity = "1";
        tooltip.style.fontSize = "1rem";

        setTimeout(() => {
          tooltip.style.opacity = "0";
        }, 4000);
      });
    });
  });

  const anchor = document.querySelector(".anchor");
  const anchorTooltip = document.getElementById("anchor-tooltip");
  const audio = document.querySelector("audio");

  anchor.addEventListener("mouseenter", () => {
    const rect = anchor.getBoundingClientRect();
    anchorTooltip.style.opacity = "1";
    anchorTooltip.style.left = `${rect.left + 60}px`;
    anchorTooltip.style.top = `${rect.top - 30}px`;

    if (audio.paused) {
      anchorTooltip.innerText = "Klik for at starte musikken";
    } else {
      anchorTooltip.innerText = "Klik for at stoppe musikken";
    }
  });

  anchor.addEventListener("mouseleave", () => {
    anchorTooltip.style.opacity = "0";
  });

  anchor.addEventListener("click", () => {
    audio.muted = false;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
