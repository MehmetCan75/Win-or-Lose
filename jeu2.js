var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");
var boule = document.querySelector("#boule");
var btn = document.querySelector(".btn");

setTimeout(() => {
    gobelet()
}, 14000);

function rdm() {
    let number = Math.floor(Math.random() * Math.floor(3) + 1);
    return number;
}

function gobelet() {
    var gobs = document.querySelector("#images")

    gobs.addEventListener("click", function checkResult(e) {
        var boulePosition = rdm() // random number de la boule
        var choosenGob = Number(e.target.innerText) // num du gobelet sur lequel on a cliqué
        if (boulePosition === choosenGob) {
            e.target.innerHTML += '<img src="./golf-ball.png" id="boule3" width="50px" height="50px"/>';
            var bouleImg = gobs.querySelector("#boule3");
            bouleImg.style.position = "absolute";
            bouleImg.style.top = "300px";
            bouleImg.style.left = "210px";
            e.target.style.transform = "translateY(-100px)";
            var youwin = document.querySelector(".youWin");
            youwin.style.visibility = "visible";
            var dabDiv = document.createElement("div");
            dabDiv.className = "dabWin"
            dabDiv.innerHTML = `
        <img class="dab" src="./dab.png" alt="dabImage">`;
            var body = document.querySelector("body");
            body.appendChild(dabDiv);
            gobs.removeEventListener("click", checkResult);
            endGameWin("win");

        } else {
            e.target.style.transform = "translateY(-100px)";
            var youlose = document.querySelector(".youLose");
            youlose.style.visibility = "visible";
            gobs.removeEventListener("click", checkResult)
            endGameWin("loose");
        }
    })
}
btn.onclick = animate; // redo the animation when we click on "play again"

function animate() {
    var images = document.querySelector('#images');
    images.innerHTML = `<div id="image1" class="gob">1</div>
    <div id="image2" class="gob">2</div>
    <div id="image3" class="gob">3</div>
    <div id="boule" src="./golf-ball.png"></div>`


    setTimeout(() => {
        gobelet()
    }, 14000);

}
btn.onclick = animate;

function endGameWin() {
    var btn = document.querySelector(".btn");
    btn.style.visibility = "visible";

    btn.onclick = function but() {
        if (document.querySelector(".dabWin")) {
            document.querySelector(".dabWin").remove()
        }
        btn.style.visibility = "hidden";
        var youwin = document.querySelector(".youWin");
        youwin.style.visibility = "hidden";
        var youlose = document.querySelector(".youLose");
        youlose.style.visibility = "hidden";

        animate();
    }
    // setTimeout("location.reload(true);", 5000);
}