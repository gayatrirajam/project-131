var status = "";
var img = "";
objects = [];
function preload(){
    var pillowandlaptop = loadImage("pillowandlaptop.jpg");
}
function setup(){
    canvas = createCanvas(600, 550);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Object";
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
function draw(){
    if(status != ""){
        for(i=0; i<objects.length;i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
 