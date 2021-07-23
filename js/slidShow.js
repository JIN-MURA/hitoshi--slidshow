let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"file:///Users/mhwhum/Downloads/793178FA-97FC-4DD2-ABD2-4B2B6038793F.jpg",
"file:///Users/mhwhum/Downloads/E09B87FA-2C1F-4C54-9C7A-5E0E8A61FFF7.jpg",
"file:///Users/mhwhum/Downloads/5EF671F0-84B7-47C0-A937-FAC8C0AD0BCC.jpg",
"file:///Users/mhwhum/Downloads/FED090FD-7892-4E27-9D00-907A9A038E38.jpg",
"file:///Users/mhwhum/Downloads/5822FE3B-B86A-4CBC-A4CC-79590B80B1D7.jpg",
"file:///Users/mhwhum/Downloads/201FB10F-6FDB-4398-9995-349D24CAC359.jpg",
"file:///Users/mhwhum/Downloads/3BDE204F-50F9-4606-8ADF-D92DC3EA5FD8.jpg",
"file:///Users/mhwhum/Downloads/3BA15E5A-FE54-4BC5-89DB-0FA9657E090B.jpg",
"file:///Users/mhwhum/Downloads/5664CEBE-7C4D-4775-8F98-DFC00E009AF9.jpg",
"file:///Users/mhwhum/Downloads/23706CDD-CB25-4ADB-A7F9-A5809B7700FB.jpg",

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
