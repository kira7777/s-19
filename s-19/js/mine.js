var imgs = document.getElementsByClassName("img-fluid");

var fixedBox = document.getElementById("fixedBox");

var smallBox = document.getElementById("smallBox");

var closeBtn = document.getElementById("closeBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

var imgsArr = [];

for (var i = 0; i < imgs.length; i++) {
  imgsArr.push(imgs[i]);
}

console.log(imgsArr);

var indexOfImg; //global

console.log(imgs);

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    var clickedImg = e.target;
    var imgsrc = clickedImg.getAttribute("src");

    indexOfImg = imgsArr.indexOf(clickedImg);

    console.log(imgsrc);

    fixedBox.style.display = "flex";
    smallBox.style.backgroundImage = `url(${imgsrc})`;
  });
}

function getNextSlide() {
  indexOfImg++;

  if (indexOfImg == imgsArr.length) {
    indexOfImg = 0;
  }
  var srcOfNextImg = imgsArr[indexOfImg].getAttribute("src");
  smallBox.style.backgroundImage = `url(${srcOfNextImg})`;
}

function getPrevSlide() {
  indexOfImg--;

  if (indexOfImg < 0) {
    indexOfImg = imgsArr.length - 1;
  }
  var srcOfNextImg = imgsArr[indexOfImg].getAttribute("src");
  smallBox.style.backgroundImage = `url(${srcOfNextImg})`;
}

prevBtn.addEventListener("click", getPrevSlide);

nextBtn.addEventListener("click", getNextSlide);

closeBtn.addEventListener("click", closeSlide);

document.addEventListener("keyup", function (eventInfo) {
  if (eventInfo.key == "Escape") {
    closeSlide();
  } else if (eventInfo.key == "ArrowRight") {
    getNextSlide();
  } else if (eventInfo.key == "ArrowLeft") {
    getPrevSlide();
  }
  console.log(eventInfo.key);
});

function closeSlide() {
  fixedBox.style.display = "none";
}

// var arr = ["red","blue","black"];

// arr.indexOf("blue");
