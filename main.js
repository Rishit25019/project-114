nosex=0
nosey=0


function preload(){



}


function setup(){

canvas=createCanvas(550,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet= ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)

}

function modelLoaded(){
    console.log("model is loaded")
}
function gotPoses(results){

    console.log(results)
    console.log(results[0].pose.nose.x)
    console.log(results[0].pose.nose.y)
    nosex=results[0].pose.nose.x
    nosey=results[0].pose.nose.y
    
}


function draw(){
image(video,0,0,550,400)


}




