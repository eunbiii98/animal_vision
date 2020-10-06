<!DOCTYPE html>
<html>
<body>
  <style>

   #videoInput{
    height: calc(100vh);
    width :calc(100vh);
    min-height: 100%;
    min-width: 100%;
    margin-top:0px;
  }

  canvas{
    border : black 1px solid;
    border-radius: 5px;
  }
  </style>

  <video id="videoInput"></video>



  <script>
        //camera확인
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        //var constraints = { video: { facingMode: { exact: "environment" }, width: { exact: 395 }, height: { exact: 395 } }, audio: false };
        //해당 인자를 통해 웹캠 접근 권한 주기
        var constraints = { audio: false, video: {width:{exact:1280}, height:{exact:920}}};

        var video = document.getElementById("video");


        function successCallback(stream) {
            video.srcObject = stream;
            video.play();

        }

        function errorCallback(error) {
            console.log(error);
        }
        navigator.getUserMedia(constraints, successCallback, errorCallback);

   </script>
</body>

</html>
