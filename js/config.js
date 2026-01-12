// Configure
let gameName;
let sliceNumber;
let spinDuration;
let wheelPrizes;

// let savedConfig = false;

const savedConfig = localStorage.getItem("spinAndWinConfig");
if (savedConfig) {
  const config = JSON.parse(savedConfig);
  gameName = config.gameName;
  sliceNumber = config.sliceNumber;
  spinDuration = config.spinDuration;
  wheelPrizes = config.wheelPrizes;
} else {
  gameName = "Spin And Win";
  sliceNumber = 40;
  spinDuration = 8;
  wheelPrizes = [
    { name: "50$", probability: 20, value: 50 },
    { name: "10$", probability: 1, value: 10 },
    { name: "10$", probability: 1, value: 10 },
    { name: "10$", probability: 1, value: 10 },
    { name: "10$", probability: 1, value: 10 },
    { name: "20$", probability: 10, value: 20 },
    { name: "20$", probability: 10, value: 20 },
  ];
}

let NiceTryColors = "golden"; //"dark" or "light" or "any" or single color like black. just type "black"
const gitHubUrl = "assets/";

let width = 1536;
let height = 1024;

let halfWidth = width / 2;
let halfHeight = height / 2;
const gameDiv = document.getElementById("game");
gameDiv.style.width = window.innerWidth + "px";
gameDiv.style.height = window.innerHeight + "px";
window.addEventListener("resize", () => {
  gameDiv.style.width = window.innerWidth + "px";
  gameDiv.style.height = window.innerHeight + "px";
});

const fontUrl = `/assets/fonts/font.otf`;
const myFont = new FontFace("RakeslyRG", `url(${fontUrl})`);
myFont
  .load()
  .then(function (loadedFont) {
    document.fonts.add(loadedFont);
    console.log("RakeslyRG font loaded!");
  })
  .catch(function (err) {
    console.error("Failed to load font:", err);
  });

// URL to your icon (can be online or local)
const iconUrl = `${gitHubUrl}spin/logo.png`;
let link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
}
link.href = iconUrl;
