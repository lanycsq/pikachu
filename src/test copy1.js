const string = `
.skin  * {
    box-sizing: border-box;
}
.skin * ::after {
    box-sizing: border-box;
}
.skin  * ::before {
    box-sizing:border-box;
}
.skin {
    background-color: #ffe500;
    position: relative;
    min-height: 50vh;
    width: 100vw;
}
.nose {
    width: 0;
    height: 0;
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    position: relative;
    left: 50% ;
    top: 146px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes move {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(10deg);
    }
    66% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.nose:hover {
    transform-origin: 50% 100% ;
    animation: move 30ms infinite linear;
}
.nose .yuan {
    position: absolute;
    width: 20px;
    height: 8px;
    top: -18px;
    left: -10px;
    border-radius: 14px 14px 0 0;
    background-color: black;
}

.eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50% ;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before {
    content: " ";
    display: block;
    border: 3px solid 333;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50% ;
    position: relative;
    left: 4px;
    top: 2px
}
.eye.left {
    transform: translateX(-100px);
}
.eye.right {
    transform: translateX(100px);
}
.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50% ;
    top: 170px;
    margin-left: -100px;
}
.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50% ;
    margin-left: -50px;
    background-color: #ffe500;
}
.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-16deg) translateX(-53px);
}
.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(16deg) translateX(53px);
}
.mouth .up .lip::before {
    content: " ";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    background-color: #ffe500;
}
.mouth .up .lip.left::before {
    right: -6px;
}
.mouth .up .lip.right::before {
    left: -6px;
}
.mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100% ;
    overflow: hidden;
}
.mouth .down .yuan1 {
    border: 3px solid black;
    height: 1000px;
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50% ;
    margin-left: -75px;
    border-radius: 75px/300px;
    background-color: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    height: 300px;
    width: 200px;
    position: absolute;
    background-color: #ff485f;
    bottom: -156px;
    left: 50% ;
    margin-left: -100px;
    border-radius: 100px;
}
.face {
    position: absolute;
    left: 50% ;
    top: 200px;
    margin-left: -44px;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    background-color: #ff0000;
    border-radius: 50% ;
    z-index: 3px;
}
.face > img {
    position: absolute;
    top: 50% ;
    left: 50% ;
}
.face.left {
    transform: translateX(-180px);
}

.face.left > img {
    transform: rotate(180 deg);
    transform-origin: 0 0;
}
.face.right {
    transform: translateX(180px);
}
`
let n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
console.log(n + ';' + string.substr(7, n));
let time = 100
const run = () => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(timer)
        return
    }
    console.log(n + ';' + string.substr(0, n));
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = 9999;
}
const play = () => {
    return setInterval(run, time)
}
const pause = () => {
    window.clearInterval(timer);
}


let timer = play();
btnPause.onclick = () => {
    pause()
}
btnPlay.onclick = () => {
    timer = play();
}
btnSlow.onclick = () => {
    pause()
    time = 300;
    timer = play()
}
btnNormal.onclick = () => {
    pause()
    time = 100;
    timer = play()
}
btnFast.onclick = () => {
    pause()
    time = 0;
    timer = play()
}