function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 260);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot() {
    save('download.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function draw()
{
    image(video, 230, 150, 220, 200);

    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(50, 50, 80);

    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(580, 50, 80);

    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(50, 500, 80);

    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(580, 500, 80);

}