document.getElementById('play').addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('audio').play();
});

document.getElementById("audio").addEventListener("ended", function() {
    window.location = "./index2.html"
})


