predictoion_1 ="" 


Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera=document.getElementById("camera");
  Webcam.attach('#camera');

  function take_snapshot()
  {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
  }

  console.log('ml5 version:', ml5.version);

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DpX9IfESm/',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    prediction_1 = result[0].label;
    speak();
    if(results[0].label == "peace")
    {
	    document.getElementById("update_emoji").innerHTML = "&#9996;";
    }
    if(results[0].label == "good")
    {
	    document.getElementById("update_emoji").innerHTML = "&#128077;";
    }
    if(results[0].label == "super")
    {
	    document.getElementById("update_emoji").innerHTML = "&#128076;";
    }
  }
}
