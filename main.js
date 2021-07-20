function preload() {

}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()  {
    console.log("poseNet initialized! :D");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}



function draw() {
    image(video, 0,0,300,300);
    stroke(235,235,149);
    strokeWeight(30);
    noFill();
    rect(0,0,300,300);
    strokeWeight(15);
    stroke(232,61,65);
    fill(235,235,149);
    circle(10,10,50);
    strokeWeight(15);
    stroke(232,61,65);
    fill(235,235,149);
    circle(290,10,50);

    strokeWeight(15);
    stroke(232,61,65);
    fill(235,235,149);
    circle(10,290,50);
    strokeWeight(15);
    stroke(232,61,65);
    fill(235,235,149);
    circle(290,290,50);
}
function take_snapshot() {
    save('moustacheFilter.png');
}