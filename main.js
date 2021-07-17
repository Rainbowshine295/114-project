function preload() {

}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
}
function draw() {
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