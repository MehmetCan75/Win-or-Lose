var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");
var boule = document.querySelector("#boule");
var btn = document.querySelector(".btn");
var gobs = document.querySelectorAll(".gob");

function rdm() {
    let number = Math.floor(Math.random() * Math.floor(3) + 1);
    return number;
}

// var clickedOnce = false;
// if(!clickedOnce) {
//     clickedOnce = true;
// }


// function gobelet(){
//          var boulePosition = rdm() // random number de la boule
//          var choosenGob = Number(e.target.innerText) // num du gobelet sur lequel on a cliqué
//          boule.style.visibility = 'hidden'
//             gobs.onclick = function(e) {
//                 for(let i in gobs) {
                    

//             // gob.innerHTML += boule2;
//             // boule2.style.visibility = "visible";
//             gob.innerHTML += '<img src="./golf-ball.png" id="boule3" width="50px" height="50px"/>';
//             var bouleImg = gob.querySelector("#boule3");
//             bouleImg.style.position = "absolute";
//             bouleImg.style.top = "300px";
//             bouleImg.style.left = "210px";
//             e.target.style.transform = "translateY(-100px)";
//             var youwin = document.querySelector(".youWin");
//             youwin.style.visibility = "visible";
//             // alert("You Win")

//             endGameWin();

//                 }    
//         } else {
            
//             e.target.style.transform = "translateY(-100px)";
//             var youlose = document.querySelector(".youLose");
//             youlose.style.visibility = "visible";
//             // alert("looser")

//             endGameWin();

//         }  

//     } }
// }

function gobelet(){
gobs.forEach(gob => {
    gob.onclick = function clk(e) {

        var boulePosition = rdm() // random number de la boule
        var choosenGob = Number(e.target.innerText) // num du gobelet sur lequel on a cliqué
        boule.style.visibility = 'hidden'

        if (boulePosition === choosenGob) {            

            gob.innerHTML += '<img src="./golf-ball.png" id="boule3" width="50px" height="50px"/>';
            var bouleImg = gob.querySelector("#boule3");
            bouleImg.style.position = "absolute";
            bouleImg.style.top = "300px";
            bouleImg.style.left = "210px";
            e.target.style.transform = "translateY(-100px)";
            var youwin = document.querySelector(".youWin");
            youwin.style.visibility = "visible";
            debugger

            endGameWin();
            
        } else {
            e.target.style.transform = "translateY(-100px)";
            var youlose = document.querySelector(".youLose");
            youlose.style.visibility = "visible";
            // alert("looser")

            endGameWin();
        }

    }   
})
}

function animate() {
    var images = document.querySelector('#images');
    images.innerHTML="";
    images.innerHTML = `<div id="image1" class="gob">1</div>
    <div id="image2" class="gob">2</div>
    <div id="image3" class="gob">3</div>
    <div id="boule" src="./golf-ball.png"></div>`
    gobs = document.querySelectorAll(".gob");
    gobs.forEach(gob => {
    gob.onclick = function clk(e) {
        var boulePosition = rdm() // random number de la boule
        var choosenGob = Number(e.target.innerText) // num du gobelet sur lequel on a cliqué
        var boule = document.querySelector("#boule");
        boule.style.visibility = 'hidden';
        if (boulePosition === choosenGob) {
            gob.innerHTML += '<img src="./golf-ball.png" id="boule3" width="50px" height="50px"/>';
            var bouleImg = gob.querySelector("#boule3");
            bouleImg.style.position = "absolute";
            bouleImg.style.top = "300px";
            bouleImg.style.left = "210px";
            e.target.style.transform = "translateY(-100px)";

            // alert("You Win")
            endGameWin();
        } else {
            e.target.style.transform = "translateY(-100px)";
            // alert("looser")
            endGameWin();
        } 
    } 
})

}

function endGameWin() {
    var btn = document.querySelector("button"); 
    btn.style.visibility ="visible";
    setTimeout("location.reload(true);", 5000);
} 

setTimeout(() => {gobelet()}, 14000);

btn.onclick = animate;


// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };















