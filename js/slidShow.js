let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/201FB10F-6FDB-4398-9995-349D24CAC359.jpg",
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/23706CDD-CB25-4ADB-A7F9-A5809B7700FB.jpg",
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/3BA15E5A-FE54-4BC5-89DB-0FA9657E090B.jpg",
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/3BA15E5A-FE54-4BC5-89DB-0FA9657E090B.jpg",
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/5664CEBE-7C4D-4775-8F98-DFC00E009AF9.jpg",
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/FED090FD-7892-4E27-9D00-907A9A038E38.jpg",
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/E4B94F0F-7A66-4DBF-970D-D0C4D91024D5.jpg",
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/E09B87FA-2C1F-4C54-9C7A-5E0E8A61FFF7.jpg",
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/793178FA-97FC-4DD2-ABD2-4B2B6038793F.jpg",
"https://raw.githubusercontent.com/JIN-MURA/hitoshi--slidshow/main/pictures/5822FE3B-B86A-4CBC-A4CC-79590B80B1D7.jpg",

];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
