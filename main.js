status="false";
searchId="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.parent('canvasParent');
    video=createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    // objectDetector=ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded(){
    console.log("The model is loaded");
    staus="true";
}
function Results(error, results){
    if(error){
        console.log(error);
    }
    // else{
    //     console.log(results);
    //     res=results;
    //     resLength=results.length;
    // }
}
function search(){
    if(document.getElementById('searchRegister').value!=""){
        console.log(document.getElementById('searchRegister').value);
    }
}
function draw(){
    image(video,0,0,600,500);
    // objectDetector.detect(video, Results);
    console.log(document.getElementById('searchRegister').value);
    // for(m=0;m<resLength;m++){
    //     if(status=="false"){
    //         document.getElementById('status').textContent="Searching for " + document.getElementById('searchRegister').value;
    //     }
    //     else if(status=="true"){
    //         if(res[m].label==document.getElementById('searchRegister').value){
    //             document.getElementById('status').textContent=document.getElementById('searchRegister').value + " found";       
    //         }
    //         else{
    //             document.getElementById('status').textContent="Searching for " + document.getElementById('searchRegister').value;
    //         }
    //     }
    // }
}