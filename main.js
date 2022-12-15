function preload() {
    
}
function setup(){
    canvas=createCanvas(550,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 350);
     video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,550,350);
}
function snapshot(){
   save("img.png");
}
function modelloaded(){
    console.log("yaaaaaaaaaaay you got Hacked lol");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
}
}