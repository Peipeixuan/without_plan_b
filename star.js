
let w = window.innerWidth;
let h = window.innerHeight;
console.log(w);
console.log(h);
let stars = [];
let title;
let bg;
let gradient;
//取得網址資訊
let getUrlString = location.href;
let url = new URL(getUrlString);
let count = url.searchParams.get('count') || 5;

let starMargin = 200;

function preload() {
    // bg = loadImage("img/bg.png");
    // gradient = loadImage("img/bg2.png");

    stars[0] = loadImage("img/star1.png");
    stars[1] = loadImage("img/star2.png");
    stars[2] = loadImage("img/star3.png");
    stars[3] = loadImage("img/star4.png");
    title = loadImage("img/title.png");
}

function setup() {
    background('rgba(0, 0, 0, 0)');
    canvas = createCanvas(w, h);
    // image(bg, 0, 0);
    // image(gradient, 0, 0, w, h);
    if (w < 600) {
        image(title, w / 2 - ((title.width / 2) / 2), h / 2 - ((title.height / 2) / 2), title.width / 2, title.height / 2);

    } else {
        image(title, w / 2 - (title.width / 2), h / 2 - (title.height / 2));

    }



    for (let i = 0; i < count; i++) {
        let s = random(stars);
        if (w < 600) {
            starMargin = 50;
            image(s, random(20, w - starMargin), random(starMargin, h - starMargin), s.width / 2, s.height / 2);
        } else {
            image(s, random(20, w - starMargin), random(starMargin, h - starMargin), s.width, s.height);
        }

    }
}

function draw() {

    noLoop();
}

// window.onresize = function () {
//     w = window.innerWidth;
//     console.log(w);
//     h = window.innerHeight;
//     canvas.size(w, h);
//     console.log(h);
// }