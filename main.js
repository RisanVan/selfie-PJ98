var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}


function takesnapshot ()
{
    
console.log(img id);
    
    
Webcam. snap (function (data_uri) {
if (img_id--"selfiel"){
document getElementById("resulti").innerHTML-"ing id-"selfiel" src-"'+data_uri+'"/>';
}
if (img_id--"selfie2"){
document. getelementById("result2"). InnerHTML - '<img id-"selfie2" src-"'+data uri+"/>';
}
if (img_id--"selfie3"){
document. getElementById("result3"). innerHTML - '<img id-"selfies3" src-"'+data_uri+"/›';

}
});
    
}


setTimeout (function()
{            
img id = "selfiel";
take_snapshot;
speak data = "Taking your next Selfie in 10 seconds":
var utterThis = new SpeechSynthesisUtterance (speak_data);
synth.speak(utterThis)

}, 5000);

