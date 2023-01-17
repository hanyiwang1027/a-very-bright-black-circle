let sizeOffset;
let size;

function setup() {
    createCanvas(windowWidth, windowHeight);
    sizeOffset = 0;
    background(240, 5);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    size = map(noise(sizeOffset), 0, 1, 0.3, 4);
    gradientCircle(size);
    sizeOffset += 0.007;
}

function gradientCircle(size) {
    for(let i = 255; i >= 0; i--) {
        stroke(i);
        strokeWeight(size);
        circle(width/2, height/2, i*size);
    }
}