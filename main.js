Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');   

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>'
});
}

console.log("ml5 version:" , ml5.version);

classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/VnGJ9NduJ/',modeLoaded);

function modeLoaded(){
    console.log("MODEL IS LOADED");
}