//取得網址資訊
let getUrlString = location.href;
let url = new URL(getUrlString);

//取得網址參數
let pluckFlower = url.searchParams.get('pluckFlower') || 0;
let isFly = url.searchParams.get('isFly') || 0;
let leaveHighway = url.searchParams.get('leaveHighway') || 0;
let isEaten = url.searchParams.get('isEaten') || 0;
let useUmbrellla = url.searchParams.get('useUmbrellla') || 0;

allScenes = new Array("1-1", "1-2", "1-3", "2-1", "2-2-1", "2-2-2", "2-3", "2-4", "2-5", "2-6", "3-1", "3-2-1", "3-2-2", "3-3-1", "3-3-2", "4-1", "4-2-1", "4-2-2");
let randomScenes = new Array();

isEnding = false;

let number;
let rightnumber;


let count = url.searchParams.get('count') || 1;

function randomHandler() {
    number = Math.floor(getRandomArbitrary(0, randomScenes.length));
    if (randomScenes[number] == now) {
        number = Math.floor(getRandomArbitrary(0, randomScenes.length));
    }
    else {
        rightnumber = number;
    }
    console.log(rightnumber);
    changescence();
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function changescence() {
    count++;
    if (count >= 6 && count <= 7) {
        if (number % 2 == 0) {
            //結束
            window.location.href = 'end.html';

        }
    } else if (count > 7) {
        //結束遊戲
        window.location.href = 'end.html';
    } else {
        //換場景
        console.log(randomScenes[rightnumber]);
        if (randomScenes[rightnumber] != undefined) {
            window.location.href = `${randomScenes[rightnumber]}.html?pluckFlower=${pluckFlower}&isFly=${isFly}&leaveHighway=${leaveHighway}&isEaten=${isEaten}&useUmbrellla=${useUmbrellla}&count=${count}`;
        } else {
            window.location.href = `1-1.html?pluckFlower=${pluckFlower}&isFly=${isFly}&leaveHighway=${leaveHighway}&isEaten=${isEaten}&useUmbrellla=${useUmbrellla}&count=${count}`;

        }

    }


}


function sceneHandler() {
    randomScenes = new Array("1-1", "1-2", "1-3", "2-1", "2-2-1", "2-2-2", "2-3", "2-4", "2-5", "2-6", "3-1", "3-2-1", "3-2-2", "3-3-1", "3-3-2", "4-1", "4-2-1", "4-2-2");

    randomScenes = randomScenes.filter(function (item) { return item != "now" });

    if (now == "2-6" || now == "3-3-1" || now == "3-3-2") {
        isEnding = 1;
    }
    if (isEnding == 1) {
        randomScenes = randomScenes.filter(function (item) { return item != "2-6" });
        randomScenes = randomScenes.filter(function (item) { return item != "3-3-1" });
        randomScenes = randomScenes.filter(function (item) { return item != "3-3-2" });
    }
    if (pluckFlower == 1) {
        randomScenes = randomScenes.filter(function (item) { return item != "3-3-2" });
    }
    else {
        randomScenes = randomScenes.filter(function (item) { return item != "3-3-1" });
    }
    if (useUmbrellla == 1) {
        randomScenes = randomScenes.filter(function (item) { return item != "3-3-2" });
    }
    else {
        randomScenes = randomScenes.filter(function (item) { return item != "3-3-1" });
    }
    if (isFly == 1) {
        randomScenes = randomScenes.filter(function (item) { return item != "2-2-1" });
        randomScenes = randomScenes.filter(function (item) { return item != "2-3" });
        randomScenes = randomScenes.filter(function (item) { return item != "2-4" });
    }
    else {
        randomScenes = randomScenes.filter(function (item) { return item != "2-2-2" });
        randomScenes = randomScenes.filter(function (item) { return item != "2-5" });
        randomScenes = randomScenes.filter(function (item) { return item != "2-6" });
    }
    if (leaveHighway == 1) {
        randomScenes = randomScenes.filter(function (item) { return item != "1-1" });
        randomScenes = randomScenes.filter(function (item) { return item != "1-2" });
        randomScenes = randomScenes.filter(function (item) { return item != "1-3" });
    }
    if (isEaten == 1) {
        randomScenes = randomScenes.filter(function (item) { return item != "4-2-1" });
    }
    else {
        randomScenes = randomScenes.filter(function (item) { return item != "4-2-2" });
    }
    console.log(randomScenes);
    randomHandler();
}