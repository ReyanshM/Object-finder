status="false";
searchId="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.parent('canvasParent');
    video=createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded(){
    console.log("The model is loaded");
}
function Results(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        res=results;
        resLength=results.length;
    }
}
function search(){
    if(document.getElementById('searchRegister').value!=""){
        searchId=document.getElementById('searchRegister').value;
        status="true";
    }
}
function draw(){
    image(video,0,0,600,500);
    objectDetector.detect(video, Results);
    console.log(document.getElementById('searchRegister').value);
    if(status=="true"){
        for(m=0;m<resLength;m++){
            if(res[m].label==searchId.toLowerCase()){
                document.getElementById('status').textContent=searchId + " is found";
            }
            else{
                document.getElementById('status').textContent=searchId + " is not found";
            }
        }
    }
}
