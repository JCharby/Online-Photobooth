let width = 800
let height = 0

let streaming = false

let video = null
let canvasPhoto = null
let startButton = null
let startMixingButton = null
let lips = null
let glasses = null
let horns = null

let db = null
let returnButton = null

let cameraContentarea = null
let canvasMixArea = null

let canvas = null


function startUp() {
  cameraContentarea = document.querySelector('#cameraContentarea')
  canvasMixArea = document.querySelector('#canvasMixArea')
  cameraContentarea.className = 'displayBlock'
  canvasMixArea.className = 'displayNone'

  video = document.querySelector('#video')
  canvasPhoto = document.querySelector('#canvasPhoto')
  photo = document.querySelector('#photo')
  startButton = document.querySelector('#startButton')
  lips = document.querySelector('#lips')
  glasses = document.querySelector('#glasses')
  horns = document.querySelector('#horns')
  db = document.querySelector('#downloadButton')
  returnButton = document.querySelector('#returnButton')
  startMixingButton = document.querySelector('#startMixingButton')

  canvas = new fabric.Canvas('c')

  startButton.addEventListener('click', takePicture, false)
  startMixingButton.addEventListener('click', startMixingFunction, false)
  downloadButton.addEventListener('click', saveImage, false)
  returnButton.addEventListener('click', returnFunction, false)
  lips.addEventListener('click', placeImage, false)
  glasses.addEventListener('click', placeImage, false)
  horns.addEventListener('click', placeImage, false)

  video.addEventListener('click', function() {
    video.play()
  }, false)

  navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
    .then(function(stream) {
      video.srcObject = stream
      video.play()
    })
    .catch(function(err) {
      console.log("An error has happened: " + err)
    })

  video.addEventListener('canplay', function(e) {
    if (!streaming) {
      hegiht = video.videoHeight / (video.videoWidth / width)

      if (isNaN(height)) {
        height - width / (4 / 3)
      }
      video.setAttribute('width', width)
      video.setAttribute('height', height)
      canvasPhoto.setAttribute('width', width)
      canvasPhoto.setAttribute('height', height)

      streaming = true
    }
  }, false)


  clearPhoto()


} //end startUp

function clearPhoto() {
  let ctx = canvasPhoto.getContext('2d')
  ctx.fillStyle = "#fa00ff"
  ctx.fillRect(0, 0, canvasPhoto.width, canvasPhoto.height)
  let data = canvasPhoto.toDataURL('image/png')
  photo.setAttribute('src', data)
} //end clearPhoto


function takePicture() {
  let ctx = canvasPhoto.getContext('2d')
  if (width && height) {
    canvasPhoto.width = width
    canvasPhoto.height = height
    ctx.drawImage(video, 0, 0, width, height)

    let data = canvasPhoto.toDataURL('image/png')
    photo.setAttribute('src', data)
  } else {
    clearPhoto()
  }

} //end takePicture

/////////////////end camera
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/////////////
////////////////////////////////////////////////////////////////


function startMixingFunction() {
  cameraContentarea.className = 'displayNone'
  canvasMixArea.classname = 'displayBlock'

  fabric.Image.fromURL('images/horns.png', function(hImg) {
    hImg.set({
      left: Math.random() = 600 + 100,
      top: Math.random() = 400 + 100,
    })
    canvas.add(hImg)
  })
} //end startMixingFuction

function saveImage() {


} //end saveImage
function returnFunction() {


} //end returnFuction
function placeImage() {


} //end placeImage






window.addEventListener('load', startUp, false)
